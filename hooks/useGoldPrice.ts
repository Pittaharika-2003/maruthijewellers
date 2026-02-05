"use client";

import { useState, useEffect, useCallback } from "react";

export interface GoldPriceData {
  price24k: number;
  price22k: number;
  price18k: number;
  silverPrice: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  source: string;
}

interface UseGoldPriceOptions {
  refreshInterval?: number; // in milliseconds
  enabled?: boolean;
}

export function useGoldPrice(options: UseGoldPriceOptions = {}) {
  const { refreshInterval = 30000, enabled = true } = options; // Default: refresh every 30 seconds

  const [data, setData] = useState<GoldPriceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);

  const fetchPrice = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch("/api/gold-price");

      if (!response.ok) {
        throw new Error("Failed to fetch gold price");
      }

      const priceData: GoldPriceData = await response.json();
      setData(priceData);
      setLastFetch(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    if (enabled) {
      fetchPrice();
    }
  }, [enabled, fetchPrice]);

  // Set up interval for periodic updates
  useEffect(() => {
    if (!enabled || refreshInterval <= 0) return;

    const intervalId = setInterval(fetchPrice, refreshInterval);

    return () => clearInterval(intervalId);
  }, [enabled, refreshInterval, fetchPrice]);

  // Calculate time since last update
  const getTimeSinceUpdate = useCallback((): string => {
    if (!lastFetch) return "Just now";

    const seconds = Math.floor((Date.now() - lastFetch.getTime()) / 1000);

    if (seconds < 60) return `${seconds} sec ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    return `${Math.floor(seconds / 3600)} hr ago`;
  }, [lastFetch]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchPrice,
    lastFetch,
    getTimeSinceUpdate,
  };
}

// Format price with Indian number system (lakhs, crores)
export function formatIndianPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Format price change with sign
export function formatPriceChange(change: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change}`;
}

// Format percentage change
export function formatPercentChange(percent: number): string {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(2)}%`;
}
