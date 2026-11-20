import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Lock,
  EyeOff,
  Cookie,
  Server,
  ChevronRight,
  Gavel,
  ShieldAlert,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Technical SEO Contractor Data Notice",
  },
  description:
    "Official data privacy statement for dmplaylogin5.com. As independent technical SEO contractors, we do not collect or process player financial credentials.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Technical SEO Contractor Data Notice",
    description:
      "Official data privacy statement for dmplaylogin5.com. As independent technical SEO contractors, we do not collect or process player financial credentials.",
    url: `${siteConfig.url}/privacy`,
    images: [
      {
        url: `${siteConfig.url}/dmplay-icon.webp`,
        width: 640,
        height: 640,
        alt: "DM Play Technical SEO Data Notice",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F6] text-[#1E2637]">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-[#EFE7E2] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6 py-2.5">
          <Link href="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
            <Image
              src="/dmplay.webp"
              alt="DMPlay Logo"
              width={152}
              height={56}
              style={{ width: "132px", height: "auto" }}
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A6578] hover:text-[#FF5A3D] transition-colors px-2 py-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
            <a
              href={LOGIN_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-flex items-center justify-center rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] px-3.5 py-1.5 text-xs font-bold text-[#1E2637] transition-all hover:border-[#FF5A3D] hover:text-[#FF5A3D] shadow-2xs"
            >
              Login Gateway
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-7 sm:py-9">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-[11px] text-[#7E8B9B]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#A9B4C2]" />
            <span className="font-semibold text-[#1E2637]">Privacy Policy &amp; Data Safety</span>
          </nav>

          {/* Page Heading */}
          <div className="mb-5 pb-4 border-b border-[#EFE7E2]">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2637]">
              Privacy &amp; Data Security Policy
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5E6B7E] leading-relaxed">
              Transparent declaration of data handling protocols, server log usage, cookie limits, and Indian IT Act (SPDI) compliance governing <strong className="text-[#1E2637]">dmplaylogin5.com</strong>.
            </p>
          </div>

          {/* CRITICAL DATA PROTECTION NOTICE - Soft & Compact */}
          <div className="rounded-2xl border border-[#FAD8D0] bg-gradient-to-r from-[#FFF7F5] via-[#FFF3EF] to-[#FFF6F4] p-4 sm:p-5 shadow-[0_2px_10px_rgba(255,90,61,0.03)] mb-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFEAE5] text-[#E0482B] shadow-2xs">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8E2] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#D84328]">
                  Contractor Data Notice
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#1E2637] tracking-tight">
                  Independent Technical Assignment &bull; Zero Data Monetization
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4E5A6C]">
                  The webmasters behind <strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong> are independent technical SEO contractors. We perform front-end optimization and speed benchmarking only.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-[#3E495B]">
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Harvesting:</strong> Zero personal data collection or sales.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Banking:</strong> No payment gateways or wallets.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Non-Operator:</strong> No access to passwords or game rounds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Cards - Compact & Soft */}
          <div className="space-y-3.5 text-xs sm:text-[13.5px] text-[#4E5A6C] leading-relaxed">
            {/* Section 1: Non-Collection Guarantee */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF2EE] text-[#FF5A3D]">
                  <EyeOff className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">1. Absolute Non-Collection of Financial &amp; Gaming Credentials</h2>
              </div>
              <p>
                As external technical SEO contractors, our technical setup enforces absolute client-side neutrality. Under no circumstances do we collect or retain:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>Player account passwords, authentication tokens, or biometric inputs.</li>
                <li>Bank account numbers, IFSC codes, UPI MPINs, or debit/credit card security numbers (CVVs).</li>
                <li>SMS or WhatsApp One-Time Passwords (OTPs).</li>
                <li>Gameplay records, game logs, or wager histories.</li>
              </ul>
              <p className="mt-2 pt-2 border-t border-[#F5EFEA] text-[12px] text-[#6E7B8E]">
                External action buttons route visitors via HTTPS directly to external third-party servers. We do not intermediate, inspect, or intercept communication payloads.
              </p>
            </section>

            {/* Section 2: Automated Server Telemetry */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF6FF] text-[#4A9FE8]">
                  <Server className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">2. Technical Infrastructure Telemetry Logs</h2>
              </div>
              <p>
                To maintain uptime and defend against malicious cyber attacks, server infrastructure generates standard ephemeral network logs:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li><strong className="text-[#1E2637]">IP Address:</strong> Utilized strictly by CDN edge firewalls for regional rate-limiting and threat blocking.</li>
                <li><strong className="text-[#1E2637]">Browser User-Agent:</strong> Analyzed purely to deliver optimized responsive layout rendering.</li>
                <li><strong className="text-[#1E2637]">HTTP Request Headers:</strong> Ephemeral server metrics retained temporarily and purged periodically.</li>
              </ul>
            </section>

            {/* Section 3: Cookies & Local Storage */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF5EB] text-[#F39838]">
                  <Cookie className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">3. Cookie Policy &amp; Tracking Limitations</h2>
              </div>
              <p>
                We do not employ aggressive cross-site tracking beacons or commercial third-party behavioral profiling cookies. Any localized cookies serve purely functional goals:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>Preserving UI accordion state toggle preferences.</li>
                <li>Accelerating CDN content caching and static asset distribution.</li>
              </ul>
              <p className="mt-2 text-[12px] text-[#6E7B8E]">
                Users may disable cookies entirely through browser settings without any interruption to text content availability.
              </p>
            </section>

            {/* Section 4: Cryptographic Security Standards */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF8F1] text-[#18B660]">
                  <Lock className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">4. 256-Bit TLS 1.3 Encryption &amp; Security Headers</h2>
              </div>
              <p>
                All browser interactions with <strong className="text-[#1E2637]">dmplaylogin5.com</strong> are protected by cryptographic transport protocols:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-sm font-extrabold text-[#18B660]">HSTS Enforced</span>
                  <span className="text-[11px] text-[#6E7B8E]">Auto HTTPS Preload</span>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-sm font-extrabold text-[#4A9FE8]">X-Frame DENY</span>
                  <span className="text-[11px] text-[#6E7B8E]">Anti-Clickjacking</span>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-sm font-extrabold text-[#FF5A3D]">nosniff</span>
                  <span className="text-[11px] text-[#6E7B8E]">MIME Protection</span>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Compliance */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF2EE] text-[#FF5A3D]">
                  <Gavel className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">5. Statutory Compliance &amp; Intermediary Safe Harbor</h2>
              </div>
              <p>
                This privacy architecture complies strictly with the <strong className="text-[#1E2637]">Information Technology Act, 2000 (India)</strong>, SPDI Rules 2011, and Section 79 intermediary safe harbor standards.
              </p>
              <div className="mt-3 p-3 rounded-xl bg-[#FAF6F4] border border-[#EFE6E0] text-xs flex items-center justify-between gap-3">
                <span className="text-[#5A6578]">For technical privacy questions:</span>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="font-bold text-[#FF5A3D] hover:underline shrink-0">
                  DM Play Official Telegram &rarr;
                </a>
              </div>
            </section>

            {/* Quick Navigation Links */}
            <div className="rounded-2xl border border-[#EFE7E2] bg-[#FAF8F6] p-4 text-xs text-[#5E6B7E]">
              <h3 className="font-bold text-[#1E2637] text-xs uppercase tracking-wider mb-2">Supporting Governance &amp; Policy Resources</h3>
              <div className="flex flex-wrap gap-2 pt-0.5">
                <Link href="/terms" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Terms &amp; Conditions &rarr;
                </Link>
                <Link href="/about" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  About Technical Contractor &rarr;
                </Link>
                <Link href="/responsible-gaming" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  18+ Player Protection Policy &rarr;
                </Link>
                <Link href="/" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#FF5A3D] hover:bg-[#FFF2EE] transition-colors shadow-2xs">
                  Return to Home &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Main Screen Unified 2-Column Footer */}
      <Footer />
    </div>
  );
}
