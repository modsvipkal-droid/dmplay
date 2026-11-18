import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Cpu,
  Gamepad2,
  Lock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About DM Play Login Portal | Platform Overview & Architecture",
  description:
    "Learn about the DM Play Login portal at dmplaylogin5.com. Our mission, independent promotional architecture, 256-bit SSL gateway, and player community support.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About DM Play Login Portal | Platform Overview & Architecture",
    description:
      "Learn about the DM Play Login portal at dmplaylogin5.com. Our mission, independent promotional architecture, 256-bit SSL gateway, and player community support.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

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
              href={REGISTER_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A5C] to-[#FF5A3D] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:opacity-95"
            >
              Register
            </a>
            <a
              href={LOGIN_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full border border-[#F0E5E0] bg-[#FFF9F7] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#1E2637] transition-all hover:border-[#FF5A3D] hover:text-[#FF5A3D]"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#717A8A]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#1E2637]">About Us</span>
          </nav>

          {/* Page Header */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3.5 py-1.5 text-xs font-bold text-[#FF5A3D] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Official Portal Overview
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              About DM Play Login Portal
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A6578] leading-relaxed">
              Welcome to <strong className="font-bold text-[#1E2637]">dmplaylogin5.com</strong>, the dedicated informational guide, promotional acquisition gateway, and onboarding resource for the DM Play online interactive gaming platform.
            </p>
          </div>

          {/* Core Sections */}
          <div className="mt-10 space-y-10 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Our Mission */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <Zap className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Our Mission &amp; Purpose</h2>
              </div>
              <p>
                Our core mission is to provide players across India and international regions with verified, transparent, and direct access to authentic DM Play gaming channels. In an environment often cluttered with unofficial mirror links and unverified third-party APK files, <strong className="text-[#1E2637]">dmplaylogin5.com</strong> acts as a secure lighthouse:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li><strong className="text-[#1E2637]">Direct Authentication Gateway:</strong> Providing one-click encrypted access to genuine login and registration endpoints.</li>
                <li><strong className="text-[#1E2637]">Educational Step-by-Step Guides:</strong> Detailed walkthroughs for wallet recharge, WinGo colour prediction mechanics, and 5-minute instant payouts.</li>
                <li><strong className="text-[#1E2637]">Responsible Entertainment:</strong> Advocating strictly for 18+ player age compliance and responsible digital gaming practices.</li>
              </ul>
            </section>

            {/* Section 2: Platform Architecture */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Zero-Download HTML5 Architecture</h2>
              </div>
              <p>
                Authentic DM Play is engineered entirely on modern web standards. Unlike legacy gaming applications that require sideloading untrusted Android APK packages, DM Play operates 100% inside standard web browsers using lightweight WebSockets and high-performance HTML5 canvas rendering:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#18B660]">&lt; 45ms</span>
                  <span className="text-xs text-[#5A6578]">Ultra Low Latency</span>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#54B0FD]">0 MB</span>
                  <span className="text-xs text-[#5A6578]">No Sideload Required</span>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#FF5A3D]">256-Bit</span>
                  <span className="text-xs text-[#5A6578]">TLS 1.3 Encryption</span>
                </div>
              </div>
            </section>

            {/* Section 3: Supported Interactive Catalog */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <Gamepad2 className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Curated Entertainment Modes</h2>
              </div>
              <p>
                The DM Play platform curates top-tier interactive titles designed for quick decision-making and dynamic odds:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="p-3 rounded-xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <strong className="text-[#1E2637]">WinGo Colour Trading:</strong> Real-time 30-second, 1-minute, 3-minute, and 5-minute prediction rounds on Red, Green, Violet, and high-multiplier number balls (up to 50x).
                </li>
                <li className="p-3 rounded-xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <strong className="text-[#1E2637]">K3 &amp; 5D Lotteries:</strong> Fast-paced dice sum analysis and numerical sequence draws with provably fair RNG algorithms.
                </li>
                <li className="p-3 rounded-xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <strong className="text-[#1E2637]">Slots &amp; Aviator Multipliers:</strong> Crash curve strategy modes and interactive arcade titles with real-time cashout capabilities.
                </li>
              </ul>
            </section>

            {/* Section 4: Security & Financial Transparency */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Security &amp; Financial Integrity</h2>
              </div>
              <p>
                Player trust is founded upon speed and reliability. DM Play incorporates automated settlement engines that support instant recharges via UPI-QR, Paytm, PhonePe, and USDT. Payout withdrawals are processed via direct Indian Bank Accounts (IMPS) within 3 to 5 minutes with zero platform withdrawal deductions.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF2EE] border border-[#FFE7DF] text-xs text-[#FF5A3D] font-medium flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span>Notice: dmplaylogin5.com is an informational portal. We do NOT collect login credentials or handle payment funds on this domain. All actions redirect to the verified official server.</span>
              </div>
            </section>

            {/* Call to action */}
            <div className="rounded-3xl bg-gradient-to-r from-[#FF7A5C] to-[#FF5A3D] p-8 text-center text-white shadow-lg shadow-[#FF5A3D]/25">
              <h3 className="text-2xl font-extrabold">Ready to Join Official DM Play?</h3>
              <p className="mt-2 text-sm text-white/90 max-w-lg mx-auto">
                Sign in to your player dashboard or register a new profile using official verified invitation code <strong className="font-mono text-white underline">{siteConfig.invitationCode}</strong>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={REGISTER_URL}
                  target="_self"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-bold text-[#FF5A3D] shadow-md hover:bg-[#FFF9F7] transition-all"
                >
                  Register Account
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={LOGIN_URL}
                  target="_self"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-black/10 px-7 py-3 text-sm font-bold text-white hover:bg-black/20 transition-all"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Main Screen Unified Footer */}
      <Footer />
    </div>
  );
}
