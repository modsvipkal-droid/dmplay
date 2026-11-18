import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Shield,
  Gavel,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | DM Play Login Portal (dmplaylogin5.com)",
  description:
    "Terms and conditions governing the use of the dmplaylogin5.com informational gateway, user obligations, intellectual property, and liability limitations.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | DM Play Login Portal (dmplaylogin5.com)",
    description:
      "Terms and conditions governing the use of the dmplaylogin5.com informational gateway, user obligations, intellectual property, and liability limitations.",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
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
            <span className="font-semibold text-[#1E2637]">Terms of Service</span>
          </nav>

          {/* Page Title */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3.5 py-1.5 text-xs font-bold text-[#FF5A3D] mb-4">
              <Gavel className="h-3.5 w-3.5" />
              Legal Terms &amp; Conditions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A6578] leading-relaxed">
              Effective Date: <strong className="text-[#1E2637]">November 2026</strong>. By accessing or browsing <strong className="text-[#1E2637]">dmplaylogin5.com</strong>, you agree to comply with and be bound by the following terms.
            </p>
          </div>

          {/* Core Terms */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Informational Portal Scope */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">1. Scope of the Informational Portal</h2>
              <p>
                <strong className="text-[#1E2637]">dmplaylogin5.com</strong> operates as an independent informational, educational, and promotional player acquisition directory. This website does not host real-money games on its own servers, does not accept customer financial deposits, and does not conduct wagering transactions directly on this domain.
              </p>
            </section>

            {/* Section 2: Eligibility & 18+ Policy */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">2. User Eligibility &amp; Legal Capacity</h2>
              <p>
                By using this portal, you affirm and warrant that:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>You are at least <strong className="text-[#1E2637]">18 years of age</strong> or of legal majority in your country of residence.</li>
                <li>Online gaming, skill games, and colour prediction entertainment are legally permissible in your municipal state or region.</li>
                <li>You are using authentic, unmanipulated device hardware and internet connections.</li>
              </ul>
            </section>

            {/* Section 3: External Redirection & Third-Party Platforms */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">3. External Redirection &amp; Operator Accounts</h2>
              <p>
                When clicking outbound buttons such as &ldquo;Login&rdquo;, &ldquo;Registration&rdquo;, or walkthrough steps, you are routed via encrypted redirect to the authentic operator platform at <strong className="text-[#1E2637]">dmplay20.com</strong>.
              </p>
              <p className="mt-3">
                All gameplay rules, deposit confirmations, payout timelines, and wallet balances are subject strictly to the end-operator terms of service. We bear no liability for operator server maintenance, gameplay disputes, or external platform connectivity outages.
              </p>
            </section>

            {/* Section 4: Prohibited Conduct */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">4. Prohibited User Conduct</h2>
              <p>Visitors are strictly forbidden from engaging in the following actions:</p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Automated scraping, crawling, or extracting content without prior explicit written consent.</li>
                <li>Attempting to probe, scan, or exploit security vulnerabilities on our web server or CDN edge.</li>
                <li>Publishing malicious mirrors, phishing clones, or misleading domain redirects utilizing our brand name.</li>
              </ul>
            </section>

            {/* Section 5: Intellectual Property */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">5. Intellectual Property Rights</h2>
              <p>
                All text, graphics, walkthrough screenshots, layout designs, and code on <strong className="text-[#1E2637]">dmplaylogin5.com</strong> are protected under international copyright and intellectual property laws. DM Play logos and brand graphics remain the exclusive property of their respective trademark holders.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
              <p>
                This informational website is provided on an &ldquo;AS-IS&rdquo; and &ldquo;AS-AVAILABLE&rdquo; basis. We do not provide financial guarantees, mathematical win assurances, or warranties regarding the continuous availability of third-party operator servers.
              </p>
              <p className="mt-3">
                Under no circumstances shall <strong className="text-[#1E2637]">dmplaylogin5.com</strong> or its administrators be liable for any direct, indirect, incidental, or consequential losses incurred as a result of participation in online interactive entertainment.
              </p>
            </section>

            {/* Section 7: Updates to Terms */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">7. Modifications &amp; Updates</h2>
              <p>
                We reserve the right to amend these Terms and Conditions periodically to reflect technological updates, regulatory enhancements, or operator guidelines. Continued use of this domain signifies acceptance of modified terms.
              </p>
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
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors text-white">Terms of Service</Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[#717A8A]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. User Agreement &amp; Terms.
          </p>
        </div>
      </footer>
    </div>
  );
}
