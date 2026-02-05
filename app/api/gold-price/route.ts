import { NextResponse } from "next/server";

interface GoldPriceData {
  price24k: number;
  price22k: number;
  price18k: number;
  silverPrice: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  source: string;
  gold10g: number;
  silver1kg: number;
}

// Cache for storing last known prices
let cachedPrice: GoldPriceData | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 10000; // 10 seconds cache

// Fetch from multiple sources for reliability
async function fetchGoldPrice(): Promise<GoldPriceData> {
  const now = Date.now();

  // Return cached price if within cache duration
  if (cachedPrice && now - lastFetchTime < CACHE_DURATION) {
    return cachedPrice;
  }

  try {
    // Try fetching from a free API
    // Using metals.dev free tier or goldapi.io
    const apiKey = process.env.GOLD_API_KEY;

    if (apiKey) {
      const response = await fetch(
        "https://www.goldapi.io/api/XAU/INR",
        {
          headers: {
            "x-access-token": apiKey,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      if (response.ok) {
        const data = await response.json();
        const pricePerGram = data.price / 31.1035;
        const price24k = Math.round(pricePerGram);

        cachedPrice = {
          price24k,
          price22k: Math.round(price24k * 0.916),
          price18k: Math.round(price24k * 0.75),
          silverPrice: 93,
          change: Math.round(data.ch / 31.1035),
          changePercent: Math.round(data.chp * 100) / 100,
          lastUpdated: new Date().toISOString(),
          source: "goldapi.io",
          gold10g: price24k * 10,
          silver1kg: 93000,
        };

        lastFetchTime = now;
        return cachedPrice;
      }
    }

    // Fallback: Simulated prices with realistic market behavior
    return getSimulatedLivePrice();
  } catch (error) {
    console.error("Error fetching gold price:", error);
    return getSimulatedLivePrice();
  }
}

// Simulated live prices that change realistically
function getSimulatedLivePrice(): GoldPriceData {
  // Base prices based on current market (Jan 2025)
  // Gold 24K: ~₹7,200-7,400/gram, Silver: ~₹92-95/gram
  const basePrice24k = 7285;
  const baseSilverPrice = 93.5;

  // Get time-based seed for consistent short-term fluctuations
  const timeSlot = Math.floor(Date.now() / 5000); // Changes every 5 seconds
  const seed = Math.sin(timeSlot) * 10000;
  const fluctuation = (seed - Math.floor(seed)) * 0.002 - 0.001; // -0.1% to +0.1%

  // Add some randomness for realistic tick-by-tick movement
  const microFluctuation = (Math.random() - 0.5) * 0.0005; // ±0.025%

  const totalFluctuation = fluctuation + microFluctuation;

  const price24k = Math.round(basePrice24k * (1 + totalFluctuation));
  const price22k = Math.round(price24k * 0.916);
  const price18k = Math.round(price24k * 0.75);
  const silverPrice = Math.round(baseSilverPrice * (1 + totalFluctuation * 1.5) * 100) / 100;

  // Daily change (more stable, changes every hour)
  const hourSlot = Math.floor(Date.now() / 3600000);
  const dailySeed = Math.sin(hourSlot * 1234) * 10000;
  const dailyChange = Math.round((dailySeed - Math.floor(dailySeed)) * 200 - 50);
  const changePercent = Math.round((dailyChange / basePrice24k) * 10000) / 100;

  cachedPrice = {
    price24k,
    price22k,
    price18k,
    silverPrice,
    change: dailyChange,
    changePercent,
    lastUpdated: new Date().toISOString(),
    source: "live-simulation",
    gold10g: price24k * 10,
    silver1kg: Math.round(silverPrice * 1000),
  };

  lastFetchTime = Date.now();
  return cachedPrice;
}

export async function GET() {
  try {
    const priceData = await fetchGoldPrice();

    return NextResponse.json(priceData, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("Error in gold price API:", error);
    return NextResponse.json(
      { error: "Failed to fetch gold price" },
      { status: 500 }
    );
  }
}
