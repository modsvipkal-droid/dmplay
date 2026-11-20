import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Gavel,
  ShieldAlert,
  ChevronRight,
  Scale,
  AlertTriangle,
  Lock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Independent Contractor Legal Terms",
  },
  description:
    "Terms of Service governing dmplaylogin5.com. As independent technical SEO contractors, we do not operate, promote, or assume liability for external gaming platforms.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | Independent Contractor Legal Terms",
    description:
      "Terms of Service governing dmplaylogin5.com. As independent technical SEO contractors, we do not operate, promote, or assume liability for external gaming platforms.",
    url: `${siteConfig.url}/terms`,
    images: [
      {
        url: `${siteConfig.url}/dmplay-icon.webp`,
        width: 640,
        height: 640,
        alt: "DM Play Terms and Conditions",
      },
    ],
  },
};

export default function TermsPage() {
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
            <span className="font-semibold text-[#1E2637]">Terms &amp; Conditions</span>
          </nav>

          {/* Page Heading */}
          <div className="mb-5 pb-4 border-b border-[#EFE7E2]">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2637]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5E6B7E] leading-relaxed">
              Legally binding terms governing access to <strong className="text-[#1E2637]">dmplaylogin5.com</strong>. Continued access constitutes absolute acceptance of these terms.
            </p>
          </div>

          {/* CRITICAL TECHNICAL CONTRACTOR & SAFE HARBOR BANNER - Soft & Compact */}
          <div className="rounded-2xl border border-[#FAD8D0] bg-gradient-to-r from-[#FFF7F5] via-[#FFF3EF] to-[#FFF6F4] p-4 sm:p-5 shadow-[0_2px_10px_rgba(255,90,61,0.03)] mb-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFEAE5] text-[#E0482B] shadow-2xs">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8E2] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#D84328]">
                  Contractor Legal Safe Harbor
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#1E2637] tracking-tight">
                  Independent Technical Assignment &bull; Full Limitation of Liability
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4E5A6C]">
                  This website (<strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong>) is an independent technical project developed and managed strictly under a third-party <strong className="text-[#1E2637]">technical SEO and web performance contract</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-[#3E495B]">
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Game Ops:</strong> No gaming operations or promotion.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Financials:</strong> No wallets, bets, or cashouts.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Zero Liability:</strong> Full contractor indemnification.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Cards - Compact & Soft */}
          <div className="space-y-3.5 text-xs sm:text-[13.5px] text-[#4E5A6C] leading-relaxed">
            {/* Section 1: Technical Contractor Scope */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF2EE] text-[#FF5A3D]">
                  <Scale className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">1. Purpose &amp; Scope of Technical Project</h2>
              </div>
              <p>
                <strong className="text-[#1E2637]">dmplaylogin5.com</strong> serves strictly as a technical demonstration, search engine ranking showcase, and informative routing gateway. The webmasters and contractors are engaged solely for:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>Search engine crawlability optimization and technical speed enhancements.</li>
                <li>Structuring technical informational pages and Schema.org semantic data.</li>
                <li>Maintaining uptime, SSL encryption certificates, and DNS routing.</li>
              </ul>
              <p className="mt-2 pt-2 border-t border-[#F5EFEA] text-[12px] text-[#6E7B8E]">
                The technical contractors do NOT operate the underlying gaming engines, do not manage player balances, and do not provide customer financial support.
              </p>
            </section>

            {/* Section 2: User Eligibility & 18+ Warranty */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF5EB] text-[#F39838]">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">2. User Age Warranty &amp; Regional Compliance</h2>
              </div>
              <p>
                As a condition of accessing this site, every user warrants and represents that:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>They are at least <strong className="text-[#1E2637]">18 years of age</strong> (or legal age of majority in their jurisdiction).</li>
                <li>They reside in a territory where online entertainment and digital gaming are strictly legal.</li>
                <li>They assume 100% individual responsibility for verifying local municipal and state regulations.</li>
              </ul>
            </section>

            {/* Section 3: External Redirection & Third-Party Platforms */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF8F1] text-[#18B660]">
                  <Lock className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">3. Third-Party Redirection &amp; Independent Operators</h2>
              </div>
              <p>
                All call-to-action buttons redirect visitors to external third-party domains operated by entirely independent entities:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>We do not control, monitor, guarantee, or endorse external third-party software, RNG integrity, or financial payouts.</li>
                <li>Any user who creates an account on external platforms enters into an independent contract with that external operator.</li>
                <li>The technical SEO contractor bears zero legal, operational, or compensatory liability for external operator disputes.</li>
              </ul>
            </section>

            {/* Section 4: Absolute Indemnification */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF2EE] text-[#FB5B5B]">
                  <Gavel className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">4. Comprehensive Indemnification of Developers</h2>
              </div>
              <p>
                By accessing this website, you explicitly agree to <strong className="text-[#1E2637]">indemnify, defend, and hold harmless</strong> the independent web developers, SEO specialists, system administrators, and hosting providers of <strong className="text-[#1E2637]">dmplaylogin5.com</strong> from any claims, liabilities, damages, losses, or legal fees arising from your access to external gaming sites or financial transactions conducted elsewhere.
              </p>
            </section>

            {/* Section 5: Statutory Safe Harbor */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <h2 className="text-sm sm:text-base font-bold text-[#1E2637] mb-2">5. Statutory Intermediary Status (Section 79 IT Act)</h2>
              <p>
                Under <strong className="text-[#1E2637]">Section 79 of the Information Technology Act, 2000 (India)</strong>, this website functions purely as an intermediary technical communications link. The technical contractors do not initiate transmissions, do not choose recipients, and do not modify external content. All statutory safe-harbor protections apply fully.
              </p>
            </section>

            {/* Quick Navigation Links */}
            <div className="rounded-2xl border border-[#EFE7E2] bg-[#FAF8F6] p-4 text-xs text-[#5E6B7E]">
              <h3 className="font-bold text-[#1E2637] text-xs uppercase tracking-wider mb-2">Supporting Governance &amp; Policy Resources</h3>
              <div className="flex flex-wrap gap-2 pt-0.5">
                <Link href="/privacy" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Privacy Policy &rarr;
                </Link>
                <Link href="/about" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  About Technical Contractor &rarr;
                </Link>
                <Link href="/responsible-gaming" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  18+ Responsible Gaming &rarr;
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
