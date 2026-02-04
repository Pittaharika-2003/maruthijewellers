"use client";

import {
  TrendingUp,
  ArrowUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Gem,
  HeartHandshake,
  Calendar,
  MapPin,
  Phone,
  Timer,
  MessageCircle,
  Instagram,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[var(--dark-700)] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Live Gold Rate Bar */}
      <LiveGoldRate />

      {/* Hero Section */}
      <HeroSection />

      {/* Collections Section */}
      <CollectionsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header
      className="flex items-center justify-between w-full h-[90px] px-[100px] border-b border-[var(--dark-300)]"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)",
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
          }}
        >
          <span className="font-cormorant text-lg font-bold text-[var(--dark-700)]">
            MJ
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-cormorant text-[22px] font-semibold text-[var(--gold-light)] tracking-[6px]">
            MARUTHI
          </span>
          <span className="font-inter text-[11px] font-medium text-[var(--text-accent)] tracking-[4px]">
            JEWELLERS
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-10">
        <a
          href="#"
          className="font-inter text-[13px] font-semibold text-[var(--gold-light)] tracking-[1px] hover:text-[var(--gold-primary)] transition-colors"
        >
          Home
        </a>
        <a
          href="#collections"
          className="font-inter text-[13px] font-normal text-[var(--text-light)] tracking-[1px] hover:text-[var(--gold-light)] transition-colors"
        >
          Collections
        </a>
        <a
          href="#about"
          className="font-inter text-[13px] font-normal text-[var(--text-light)] tracking-[1px] hover:text-[var(--gold-light)] transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="font-inter text-[13px] font-normal text-[var(--text-light)] tracking-[1px] hover:text-[var(--gold-light)] transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Gold Rate Button */}
      <button
        className="flex items-center gap-2 px-5 py-2.5 rounded-3xl border border-[var(--gold-primary)]"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B20 100%)",
        }}
      >
        <IndianRupee className="w-4 h-4 text-[var(--gold-light)]" />
        <span className="font-inter text-[13px] font-medium text-[var(--gold-light)]">
          Today&apos;s Gold Rate
        </span>
      </button>
    </header>
  );
}

function LiveGoldRate() {
  return (
    <div
      className="flex items-center justify-center gap-6 w-full py-5 px-[100px]"
      style={{
        background: "linear-gradient(90deg, #D4AF3710 0%, #D4AF3705 100%)",
      }}
    >
      <TrendingUp className="w-5 h-5 text-[var(--gold-primary)]" />
      <span className="font-inter text-sm font-semibold text-[var(--gold-primary)] tracking-[1px]">
        Live Gold Rate (24K):
      </span>
      <span className="font-cormorant text-2xl font-medium text-white">
        ₹7,245/gram
      </span>
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border border-[var(--green-accent)]"
        style={{ background: "#25D36620" }}
      >
        <ArrowUp className="w-3 h-3 text-[var(--green-accent)]" />
        <span className="font-inter text-xs font-semibold text-[var(--green-accent)]">
          +2.4%
        </span>
      </div>
      <span className="font-inter text-[11px] font-normal text-[var(--text-subtle)]">
        Updated 5 mins ago
      </span>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="flex items-center justify-between w-full h-[750px] px-[100px] py-[60px]"
      style={{
        background:
          "radial-gradient(ellipse 150% 150% at 80% 50%, #1A1410 0%, #0D0D0D 70%, #080808 100%)",
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col gap-7 w-[580px]">
        {/* Badge */}
        <div
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-3xl border border-[#D4AF3740] w-fit"
          style={{ background: "#D4AF3710" }}
        >
          <Sparkles className="w-4 h-4 text-[var(--gold-primary)]" />
          <span className="font-inter text-[13px] font-semibold text-[var(--gold-primary)] tracking-[2px]">
            The Art of Fine Jewellery
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-cormorant text-[58px] font-normal text-white leading-[1.15] w-[560px]">
          Discover Refined Gold & Silver Jewellery
        </h1>

        {/* Description */}
        <p className="font-inter text-[17px] font-normal text-[var(--text-secondary)] leading-[1.7] w-[500px]">
          Crafted with precision, elegance, and timeless design. Experience
          purity and craftsmanship that has served generations with honesty and
          excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5">
          <button
            className="flex items-center gap-2.5 px-9 py-4 rounded-[30px]"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
              boxShadow: "0 4px 12px #D4AF3740",
            }}
          >
            <span className="font-inter text-sm font-semibold text-[var(--dark-700)] tracking-[1px]">
              Explore Collections
            </span>
            <ArrowRight className="w-4 h-4 text-[var(--dark-700)]" />
          </button>
          <button
            className="flex items-center gap-2 px-9 py-4 rounded-[30px] border border-[#D4AF3760]"
            style={{ background: "#D4AF3708" }}
          >
            <span className="font-inter text-sm font-medium text-[var(--gold-primary)] tracking-[1px]">
              Visit Store
            </span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="relative w-[520px] h-[620px] rounded-3xl border-2 border-[#D4AF3730] overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #D4AF3708 0%, transparent 50%, #D4AF3708 100%)",
          }}
        />
      </div>
    </section>
  );
}

function CollectionsSection() {
  const collections = [
    {
      title: "Silver Jewellery",
      image:
        "https://images.unsplash.com/photo-1726825990567-73f6d3597cdb?w=1080",
    },
    {
      title: "Gold Jewellery",
      image:
        "https://images.unsplash.com/photo-1644341129908-6477e0157037?w=1080",
      featured: true,
    },
    {
      title: "Diamond Jewellery",
      image:
        "https://images.unsplash.com/photo-1668619322652-ccea8fa84b8d?w=1080",
    },
  ];

  return (
    <section
      id="collections"
      className="flex flex-col items-center gap-[60px] w-full px-[100px] py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]">
          OUR COLLECTIONS
        </span>
        <h2 className="font-cormorant text-[52px] font-normal text-white">
          Maruthi Jewellers Collection
        </h2>
        {/* Ornament */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-10 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex items-center justify-center gap-7 w-full">
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} />
        ))}
      </div>
    </section>
  );
}

function CollectionCard({
  title,
  image,
  featured = false,
}: {
  title: string;
  image: string;
  featured?: boolean;
}) {
  return (
    <div
      className="flex flex-col w-[380px] rounded-[20px] overflow-hidden"
      style={{
        background: featured
          ? "linear-gradient(135deg, #151515 0%, #1A1510 100%)"
          : "#121212",
        boxShadow: featured
          ? "0 8px 24px #D4AF3720, 0 4px 16px #00000040"
          : "0 4px 16px #00000030",
        border: featured
          ? "2px solid transparent"
          : "1px solid transparent",
        borderImage: featured
          ? "linear-gradient(135deg, #D4AF37, #B8860B 50%, #D4AF3760) 1"
          : "linear-gradient(135deg, #D4AF3740, #1F1F1F) 1",
      }}
    >
      {/* Image */}
      <div
        className="relative w-full h-[280px] rounded-t-[20px] overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {featured && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #D4AF3710 0%, #D4AF3720 50%, #D4AF3700 100%)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-7 w-full">
        <h3 className="font-cormorant text-[26px] font-medium text-white">
          {title}
        </h3>
        <div className="flex items-center gap-2.5">
          <span className="font-inter text-[13px] font-semibold text-[var(--gold-primary)] tracking-[1px]">
            Explore Collection
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
        </div>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Purity Guaranteed",
      description:
        "100% hallmarked gold and certified silver jewellery with BIS certification.",
    },
    {
      icon: Award,
      title: "Certified Jewellery",
      description:
        "Authentic diamonds and quality-checked ornaments with proper certification.",
    },
    {
      icon: Gem,
      title: "Expert Craftsmanship",
      description:
        "Designed by skilled artisans with fine detailing and traditional techniques.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted Legacy",
      description:
        "Serving generations with honesty, excellence, and customer satisfaction.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] w-full px-[100px] py-[100px] bg-[var(--dark-600)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]">
          WHY CHOOSE US
        </span>
        <h2 className="font-cormorant text-[48px] font-normal text-white">
          Why Choose Maruthi Jewellers
        </h2>
        <p className="font-inter text-[17px] font-normal text-[#8A8A8A]">
          A legacy of trust, purity, and timeless craftsmanship
        </p>
        {/* Ornament */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-10 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex items-center justify-center gap-6 w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-6 w-[290px] px-7 py-9 rounded-[20px] border border-[var(--dark-200)]"
      style={{
        background: "#151515",
        boxShadow: "0 2px 8px #00000020",
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-14 h-14 rounded-[28px] border border-[#D4AF3730]"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B10 100%)",
        }}
      >
        <Icon className="w-6 h-6 text-[var(--gold-primary)]" />
      </div>

      {/* Title */}
      <h3 className="font-cormorant text-[22px] font-medium text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter text-sm font-normal text-[var(--text-muted)] leading-[1.6] text-center w-[240px]">
        {description}
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center justify-center gap-[100px] w-full px-[100px] py-[100px]"
      style={{
        background:
          "radial-gradient(ellipse 120% 120% at 20% 50%, #141210 0%, #0A0A0A 60%, #080808 100%)",
      }}
    >
      {/* Content */}
      <div className="flex flex-col gap-7 w-[520px]">
        <span className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]">
          ABOUT MARUTHI JEWELLERS
        </span>

        <h2 className="font-cormorant text-[44px] font-normal text-white leading-[1.2] w-[480px]">
          A Legacy of Trust, Purity & Fine Craftsmanship
        </h2>

        <p className="font-inter text-base font-normal text-[#8A8A8A] leading-[1.8] w-[480px]">
          Maruthi Jewellers has been a trusted name in jewellery for over
          decades, offering exquisitely crafted gold, silver, and diamond
          ornaments that celebrate tradition and elegance.
        </p>

        <p className="font-inter text-base font-normal text-[#8A8A8A] leading-[1.8] w-[480px]">
          Every piece reflects our commitment to purity, transparency, and
          timeless design. From everyday wear to bridal collections, we take
          pride in creating jewellery that becomes part of your most cherished
          moments.
        </p>

        {/* Stats */}
        <div className="flex gap-10 pt-8 border-t border-[#D4AF3760]">
          <div className="flex flex-col gap-2">
            <span className="font-cormorant text-[40px] font-normal text-[var(--gold-primary)]">
              100%
            </span>
            <span className="font-inter text-[13px] font-normal text-[var(--text-muted)] tracking-[1px]">
              Hallmarked Gold
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-cormorant text-[40px] font-normal text-[var(--gold-primary)]">
              BIS
            </span>
            <span className="font-inter text-[13px] font-normal text-[var(--text-muted)] tracking-[1px]">
              Certified
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-cormorant text-[40px] font-normal text-[var(--gold-primary)]">
              1000+
            </span>
            <span className="font-inter text-[13px] font-normal text-[var(--text-muted)] tracking-[1px]">
              Happy Customers
            </span>
          </div>
        </div>

        {/* Established Badge */}
        <div
          className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[#D4AF3720] w-fit"
          style={{ background: "#D4AF3708" }}
        >
          <Calendar className="w-[18px] h-[18px] text-[var(--gold-primary)]" />
          <span className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[0.5px]">
            Established 1995 • 30+ Years of Excellence
          </span>
        </div>

        {/* Certification Badges */}
        <div className="flex gap-4">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF3730]"
            style={{ background: "#151515" }}
          >
            <ShieldCheck className="w-4 h-4 text-[var(--gold-primary)]" />
            <span className="font-inter text-xs font-medium text-[#F5F5F0]">
              BIS Hallmark
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF3730]"
            style={{ background: "#151515" }}
          >
            <Award className="w-4 h-4 text-[var(--gold-primary)]" />
            <span className="font-inter text-xs font-medium text-[#F5F5F0]">
              916 Gold
            </span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="w-[500px] h-[520px] rounded-[20px] border-2 border-[#D4AF3720]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}

function ContactSection() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Store Address",
      content:
        "H.no 8-2-1 133 134 & 135\nLaxmi Narayana Jakota Complex\nOld Beet Bazar Warangal Chowrastha\nWarangal, Telangana",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "+91 9849497131\n+91 9640482131",
    },
    {
      icon: Timer,
      title: "Store Timings",
      content: "10:00 AM – 10:00 PM\nOpen all days",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-[60px] w-full px-[100px] py-[100px] bg-[var(--dark-600)]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]">
          CONTACT US
        </span>
        <h2 className="font-cormorant text-[48px] font-normal text-white">
          Contact Maruthi Jewellers
        </h2>
        <p className="font-inter text-[17px] font-normal text-[#8A8A8A]">
          Visit us or get in touch for trusted jewellery and timeless designs
        </p>
        {/* Ornament */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-10 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </div>
      </div>

      {/* Contact Cards */}
      <div className="flex items-start justify-center gap-6 w-full">
        {contactCards.map((card, index) => (
          <ContactCard key={index} {...card} />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-3 px-8 py-3.5 rounded-[30px] bg-[var(--green-accent)]">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="font-inter text-sm font-semibold text-white tracking-[1px]">
            Contact on WhatsApp
          </span>
        </button>
        <button
          className="flex items-center gap-3 px-8 py-3.5 rounded-[30px] border border-[#D4AF3760]"
          style={{ background: "#D4AF3708" }}
        >
          <Instagram className="w-5 h-5 text-[var(--gold-primary)]" />
          <span className="font-inter text-sm font-medium text-[var(--gold-primary)] tracking-[1px]">
            Follow on Instagram
          </span>
        </button>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <div
      className="flex flex-col gap-5 w-[360px] px-7 py-8 rounded-[20px] border border-[var(--dark-200)]"
      style={{ background: "#151515" }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-[52px] h-[52px] rounded-[26px] border border-[#D4AF3730]"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B10 100%)",
        }}
      >
        <Icon className="w-[22px] h-[22px] text-[var(--gold-primary)]" />
      </div>

      {/* Title */}
      <h3 className="font-cormorant text-xl font-medium text-white">{title}</h3>

      {/* Content */}
      <p className="font-inter text-sm font-normal text-[#8A8A8A] leading-[1.7] whitespace-pre-line w-[300px]">
        {content}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="flex flex-col gap-12 w-full px-[100px] pt-20 pb-10"
      style={{ background: "#080808" }}
    >
      {/* Main Footer */}
      <div className="flex items-start justify-between w-full">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 w-[320px]">
          {/* Logo */}
          <div className="flex items-center gap-3.5">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-[22px]"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
              }}
            >
              <span className="font-cormorant text-base font-bold text-[var(--dark-700)]">
                MJ
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-cormorant text-xl font-semibold text-[var(--gold-primary)] tracking-[4px]">
                MARUTHI
              </span>
              <span className="font-inter text-[10px] font-medium text-[#8A8A8A] tracking-[3px]">
                JEWELLERS
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-inter text-sm font-normal text-[var(--text-subtle)] leading-[1.7] w-[300px]">
            A trusted destination for gold, silver, and diamond jewellery,
            crafted with purity and timeless elegance.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex gap-[60px]">
          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-5">
              <a
                href="#"
                className="font-inter text-sm font-normal text-[var(--text-subtle)] hover:text-[var(--gold-light)] transition-colors"
              >
                Our Collections
              </a>
              <a
                href="#about"
                className="font-inter text-sm font-normal text-[var(--text-subtle)] hover:text-[var(--gold-light)] transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="font-inter text-sm font-normal text-[var(--text-subtle)] hover:text-[var(--gold-light)] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
              Contact
            </h4>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)] leading-[1.6] w-[200px]">
              H.no 8-2-1 133 134 & 135
              <br />
              Laxmi Narayana Jakota Complex
              <br />
              Warangal, Telangana
            </p>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)]">
              +91 9849497131
            </p>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)]">
              +91 9640482131
            </p>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)]">
              maruthijewellers@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--dark-300)]" />

      {/* Bottom Footer */}
      <div className="flex items-center justify-between w-full">
        <p className="font-inter text-[13px] font-normal text-[#4A4A4A]">
          © 2026 Maruthi Jewellers. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center justify-center w-11 h-11 rounded-[22px] border border-[var(--dark-100)]"
            style={{ background: "#121212" }}
          >
            <MessageCircle className="w-5 h-5 text-[var(--text-subtle)]" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-11 h-11 rounded-[22px] border border-[var(--dark-100)]"
            style={{ background: "#121212" }}
          >
            <Instagram className="w-5 h-5 text-[var(--text-subtle)]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
