import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import {
  Shield,
  Lock,
  EyeOff,
  Cookie,
  Server,
  FileText,
  ChevronRight,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DM Play Login Portal (dmplaylogin5.com)",
  description:
    "Privacy Policy for dmplaylogin5.com. Discover how we protect player privacy, adhere to strict data security protocols, cookies usage, and SSL encryption.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | DM Play Login Portal (dmplaylogin5.com)",
    description:
      "Privacy Policy for dmplaylogin5.com. Discover how we protect player privacy, adhere to strict data security protocols, cookies usage, and SSL encryption.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#717A8A]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#1E2637]">Privacy Policy</span>
          </nav>

          {/* Page Title */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3.5 py-1.5 text-xs font-bold text-[#FF5A3D] mb-4">
              <Shield className="h-3.5 w-3.5" />
              Data Protection &amp; Confidentiality
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A6578] leading-relaxed">
              Last Updated: <strong className="text-[#1E2637]">November 2026</strong>. This document explains how <strong className="text-[#1E2637]">dmplaylogin5.com</strong> handles digital information, user visits, cookie preferences, and security protocols.
            </p>
          </div>

          {/* Privacy Core Highlights */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Non-Collection of Sensitive Credentials */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <EyeOff className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">1. Strict Non-Collection of Financial Credentials</h2>
              </div>
              <p>
                <strong className="text-[#1E2637]">dmplaylogin5.com</strong> is strictly an informational promotional guide and navigation gateway. We do <strong className="text-[#FF5A3D] underline">NOT</strong> collect, request, process, or store:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Your gaming passwords, PINs, or biometric credentials.</li>
                <li>Your bank account details, UPI MPINs, or debit/credit card numbers.</li>
                <li>One-Time Passwords (OTPs) generated by SMS or authenticators.</li>
              </ul>
              <p className="mt-3 text-xs bg-[#FFFDFC] border border-[#F2E8E4] p-3 rounded-xl">
                When you click &ldquo;Login&rdquo; or &ldquo;Register&rdquo;, your browser establishes an encrypted direct TLS connection to the authentic external game operator server.
              </p>
            </section>

            {/* Section 2: Technical Logs & Anti-Spam */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <Server className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">2. Automatically Logged Technical Data</h2>
              </div>
              <p>
                Like all modern web servers, when you navigate our site, standard automated server logs are generated for infrastructure monitoring and malicious bot prevention:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li><strong className="text-[#1E2637]">Internet Protocol (IP) Address:</strong> Used strictly for geographic routing, rate limiting, and DDoS mitigation.</li>
                <li><strong className="text-[#1E2637]">Browser &amp; Device Type:</strong> User-agent strings to ensure responsive layout rendering on Android, iOS, Windows, and macOS.</li>
                <li><strong className="text-[#1E2637]">Referrer Information:</strong> Domain source URL and timestamp of page visit.</li>
              </ul>
            </section>

            {/* Section 3: Cookies & Storage */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <Cookie className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">3. Cookie Policy &amp; Tracking Preferences</h2>
              </div>
              <p>
                We use small data files termed cookies and local storage tokens solely to maintain site speed, retain user display preferences (such as accordion open states), and optimize CDN asset caching.
              </p>
              <p className="mt-3">
                You have full control over cookies. You may configure your browser (Google Chrome, Apple Safari, Mozilla Firefox) to block or delete cookies at any time without impacting your ability to browse this guide.
              </p>
            </section>

            {/* Section 4: 256-Bit TLS Security */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">4. 256-Bit TLS 1.3 Cryptographic Security</h2>
              </div>
              <p>
                All data transmission between your device and <strong className="text-[#1E2637]">dmplaylogin5.com</strong> is protected by end-to-end 256-bit Transport Layer Security (TLS 1.3) with HTTP Strict Transport Security (HSTS) enabled. This prevents eavesdropping, tampering, or man-in-the-middle packet sniffing.
              </p>
            </section>

            {/* Section 5: Indian IT Act & User Rights */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">5. Legal Compliance &amp; User Inquiries</h2>
              <p>
                We adhere to the Information Technology Act (2000) and Sensitive Personal Data or Information (SPDI) rules of India, along with globally accepted privacy standards. Users have the right to request clarification or deletion of any technical logs associated with their network visit.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF2EE] border border-[#FFE7DF] text-xs text-[#1E2637]">
                For privacy questions or data protection inquiries, reach out through our official community channel at <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="font-bold text-[#54B0FD] underline">DM Play Official Telegram</a>.
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C2522] bg-[#111715] py-12 text-[#8E9794]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#1C2522] pb-8 text-xs">
            <Link href="/" className="inline-block transition-opacity hover:opacity-95">
              <Image
                src="/dmplay.webp"
                alt="DMPlay Logo"
                width={152}
                height={56}
                className="h-9 w-auto object-contain brightness-110"
              />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#8E9794]">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/responsible-gaming" className="hover:text-white transition-colors">Responsible Gaming (18+)</Link>
              <Link href="/privacy" className="hover:text-white transition-colors text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[#717A8A]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Strict User Privacy Standards.
          </p>
        </div>
      </footer>
    </div>
  );
}
