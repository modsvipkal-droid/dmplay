import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  EyeOff,
  Cookie,
  Server,
  ChevronRight,
  Gavel,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Technical SEO Contractor Data Protection Notice",
  description:
    "Official data privacy statement for dmplaylogin5.com. As independent technical SEO contractors, we do not collect or process player financial credentials or gaming data.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Technical SEO Contractor Data Protection Notice",
    description:
      "Official data privacy statement for dmplaylogin5.com. As independent technical SEO contractors, we do not collect or process player financial credentials or gaming data.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF7F4] text-[#1E2637]">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-[#F0E5E0] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
            <Image
              src="/dmplay.webp"
              alt="DMPlay Logo"
              width={152}
              height={56}
              style={{ width: "140px", height: "auto" }}
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-[#5A6578] hover:text-[#FF5A3D] transition-colors px-2 py-1"
            >
              &larr; Back to Home
            </Link>
            <a
              href={LOGIN_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full border border-[#F0E5E0] bg-[#FFF9F7] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#1E2637] transition-all hover:border-[#FF5A3D] hover:text-[#FF5A3D]"
            >
              Login Gateway
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#717A8A]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#1E2637]">Privacy Policy &amp; Data Safety</span>
          </nav>

          {/* CRITICAL TECHNICAL CONTRACTOR & DATA PROTECTION NOTICE */}
          <div className="rounded-3xl border-2 border-[#FB5B5B]/40 bg-gradient-to-br from-[#FFF5F3] via-[#FFEBE8] to-[#FFF0EC] p-6 sm:p-8 shadow-md mb-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FB5B5B] text-white shadow-sm">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FB5B5B]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FB5B5B]">
                  Contractor Data Protection Notice
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1E2637] tracking-tight">
                  Independent Technical Assignment &bull; Zero Data Monetization
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] font-medium">
                  <strong className="text-[#1E2637] font-bold">DATA PRIVACY CLARIFICATION:</strong> The webmasters and developers behind <strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong> are independent technical SEO contractors. We are commissioned solely to perform front-end optimization and technical search indexing.
                </p>
                <div className="rounded-2xl bg-white/80 p-4 border border-[#F2D7D2] text-xs sm:text-sm text-[#3E495B] space-y-2">
                  <p>
                    &bull; <strong className="text-[#1E2637]">Zero User Data Harvesting:</strong> We do NOT collect, harvest, store, or sell any personal identifying information, phone numbers, email addresses, or financial data.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Zero Banking Access:</strong> This website does not possess any payment gateway, wallet infrastructure, or financial collection mechanism.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Non-Operator Status:</strong> We have no access to external player databases, game rounds, or account passwords.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E2637]">
              Privacy &amp; Data Security Policy
            </h1>
            <p className="mt-3 text-base text-[#5A6578] leading-relaxed">
              Transparent declaration of data handling protocols, technical log usage, cookie limits, and Indian IT Act (SPDI) compliance governing <strong className="text-[#1E2637]">dmplaylogin5.com</strong>.
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Non-Collection Guarantee */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <EyeOff className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">1. Absolute Non-Collection of Financial &amp; Gaming Credentials</h2>
              </div>
              <p>
                As external technical SEO contractors, our technical setup enforces absolute client-side neutrality. Under no circumstances do we collect or retain:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Player account passwords, authentication tokens, or biometric inputs.</li>
                <li>Bank account numbers, IFSC codes, UPI MPINs, or debit/credit card security numbers (CVVs).</li>
                <li>SMS or WhatsApp One-Time Passwords (OTPs).</li>
                <li>Gameplay records, game logs, or wager histories.</li>
              </ul>
              <p className="mt-3 text-xs bg-[#FFFDFC] border border-[#F2E8E4] p-3 rounded-xl">
                When a user interacts with external action buttons, they are routed via HTTPS directly to external third-party servers. We do not intermediate, inspect, or intercept the communication payload.
              </p>
            </section>

            {/* Section 2: Automated Server Telemetry */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <Server className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">2. Technical Infrastructure Telemetry Logs</h2>
              </div>
              <p>
                To maintain uptime and defend against distributed denial-of-service (DDoS) cyber attacks, our server generates standard ephemeral network logs:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li><strong className="text-[#1E2637]">IP Address:</strong> Utilized strictly by CDN firewalls for regional rate-limiting and threat blocking.</li>
                <li><strong className="text-[#1E2637]">Browser User-Agent:</strong> Analyzed purely to deliver optimized responsive layout rendering.</li>
                <li><strong className="text-[#1E2637]">HTTP Request Headers:</strong> Ephemeral server metrics retained temporarily and purged periodically.</li>
              </ul>
            </section>

            {/* Section 3: Cookies & Local Storage */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <Cookie className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">3. Cookie Policy &amp; Tracking Limitations</h2>
              </div>
              <p>
                We do not employ aggressive cross-site tracking beacons or commercial third-party behavioral profiling cookies. Any localized cookies or cache tokens serve purely functional goals:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Preserving UI accordion state toggle preferences.</li>
                <li>Accelerating CDN content caching and static asset distribution.</li>
              </ul>
              <p className="mt-3">
                Users may disable cookies entirely through their browser settings without experiencing any interruption to text content availability.
              </p>
            </section>

            {/* Section 4: Cryptographic Security Standards */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">4. 256-Bit TLS 1.3 Encryption &amp; Security Headers</h2>
              </div>
              <p>
                All browser interactions with <strong className="text-[#1E2637]">dmplaylogin5.com</strong> are protected by cryptographic transport protocols:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li><strong className="text-[#1E2637]">HSTS Enforcement:</strong> Strict-Transport-Security preloaded for automated HTTPS routing.</li>
                <li><strong className="text-[#1E2637]">X-Frame-Options DENY:</strong> Absolute protection against clickjacking and hidden iframe embedding.</li>
                <li><strong className="text-[#1E2637]">X-Content-Type-Options nosniff:</strong> Prevention of malicious MIME-type execution.</li>
              </ul>
            </section>

            {/* Section 5: Statutory Compliance */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <Gavel className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">5. Statutory Compliance &amp; Intermediary Safe Harbor</h2>
              </div>
              <p>
                This privacy architecture complies strictly with the <strong className="text-[#1E2637]">Information Technology Act, 2000 (India)</strong>, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI), and Section 79 intermediary safe harbor standards.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF8F5] border border-[#F0E5E0] text-xs text-[#5A6578]">
                For technical privacy inquiries, contact our community administrators via <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="font-bold text-[#54B0FD] underline">DM Play Official Telegram</a>.
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Main Screen Unified 2-Column Footer */}
      <Footer />
    </div>
  );
}
