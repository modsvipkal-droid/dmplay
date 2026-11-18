import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Gavel,
  ShieldAlert,
  ChevronRight,
  Scale,
  AlertTriangle,
  FileText,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Independent Technical Contractor Legal Terms",
  description:
    "Terms of Service governing dmplaylogin5.com. As independent technical SEO contractors, we do not operate, promote, or assume liability for external gaming platforms.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | Independent Technical Contractor Legal Terms",
    description:
      "Terms of Service governing dmplaylogin5.com. As independent technical SEO contractors, we do not operate, promote, or assume liability for external gaming platforms.",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
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
            <span className="font-semibold text-[#1E2637]">Terms &amp; Conditions</span>
          </nav>

          {/* CRITICAL TECHNICAL CONTRACTOR & SAFE HARBOR BANNER */}
          <div className="rounded-3xl border-2 border-[#FB5B5B]/40 bg-gradient-to-br from-[#FFF5F3] via-[#FFEBE8] to-[#FFF0EC] p-6 sm:p-8 shadow-md mb-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FB5B5B] text-white shadow-sm">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FB5B5B]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FB5B5B]">
                  Contractor Legal Safe Harbor
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1E2637] tracking-tight">
                  Independent Technical Assignment &bull; Full Limitation of Liability
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] font-medium">
                  <strong className="text-[#1E2637] font-bold">BINDING LEGAL DECLARATION:</strong> This website (<strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong>) is an independent technical project developed and managed strictly under a third-party <strong className="text-[#1E2637]">technical search engine optimization (SEO) and web performance contract</strong>.
                </p>
                <div className="rounded-2xl bg-white/80 p-4 border border-[#F2D7D2] text-xs sm:text-sm text-[#3E495B] space-y-2">
                  <p>
                    &bull; <strong className="text-[#1E2637]">No Game Operation:</strong> The developers and technical contractors do NOT operate, own, manage, promote, or solicit users to play any online game, betting, casino, or wagering platform.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">No Financial Agency:</strong> No payments, deposits, withdrawals, or player accounts are handled or stored by this contractor.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Absolute Disclaimer of Liability:</strong> By accessing this domain, you irrevocably agree that the technical developers and SEO contractors bear zero liability for any external transactions, gameplay outcomes, or financial losses incurred on third-party sites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E2637]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-base text-[#5A6578] leading-relaxed">
              Legally binding terms governing access to <strong className="text-[#1E2637]">dmplaylogin5.com</strong>. Continued access constitutes absolute acceptance of these terms.
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Technical Contractor Scope */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">1. Purpose &amp; Scope of Technical Project</h2>
              </div>
              <p>
                <strong className="text-[#1E2637]">dmplaylogin5.com</strong> serves strictly as a technical demonstration, search engine ranking showcase, and informative routing gateway. The webmasters and contractors are engaged solely for:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Search engine crawlability optimization and technical speed enhancements.</li>
                <li>Structuring technical informational pages and Schema.org semantic data.</li>
                <li>Maintaining uptime, SSL encryption certificates, and DNS routing.</li>
              </ul>
              <p className="mt-3">
                The technical contractors do NOT operate the underlying gaming engines, do not manage player balances, and do not provide customer financial support.
              </p>
            </section>

            {/* Section 2: User Eligibility & 18+ Warranty */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">2. User Age Warranty &amp; Regional Compliance</h2>
              </div>
              <p>
                As a condition of accessing this site, every user warrants and represents that:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>They are at least <strong className="text-[#1E2637]">18 years of age</strong> (or the legal age of majority in their jurisdiction).</li>
                <li>They reside in a state, province, or territory where online entertainment and digital gaming are strictly legal.</li>
                <li>They assume 100% individual responsibility for verifying local municipal and state regulations.</li>
              </ul>
            </section>

            {/* Section 3: External Redirection & Third-Party Platforms */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">3. Third-Party Redirection &amp; Independent Operators</h2>
              </div>
              <p>
                All call-to-action buttons redirect visitors to external third-party domains (such as <strong className="font-mono text-[#1E2637]">dmplay20.com</strong>) operated by entirely independent entities:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>We do not control, monitor, guarantee, or endorse external third-party software, RNG integrity, or financial payouts.</li>
                <li>Any user who creates an account on external platforms enters into an independent contract with that external operator.</li>
                <li>The technical SEO contractor bears zero legal, operational, or compensatory liability for external operator disputes.</li>
              </ul>
            </section>

            {/* Section 4: Absolute Indemnification */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FB5B5B]">
                  <Gavel className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">4. Comprehensive Indemnification of Developers</h2>
              </div>
              <p>
                By accessing this website, you explicitly agree to <strong className="text-[#1E2637]">indemnify, defend, and hold harmless</strong> the independent web developers, SEO specialists, system administrators, and hosting providers of <strong className="text-[#1E2637]">dmplaylogin5.com</strong> from and against any and all claims, liabilities, damages, losses, costs, or legal fees arising out of:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Your access to or use of external third-party gaming platforms.</li>
                <li>Any financial losses, bets, or transactions conducted on third-party sites.</li>
                <li>Any violation of local municipal laws or third-party rights committed by you.</li>
              </ul>
            </section>

            {/* Section 5: Statutory Safe Harbor */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">5. Statutory Intermediary Status (Section 79 IT Act)</h2>
              <p>
                Under <strong className="text-[#1E2637]">Section 79 of the Information Technology Act, 2000 (India)</strong>, this website functions purely as an intermediary technical communications link. The technical contractors do not initiate transmissions, do not choose the recipients, and do not modify the content transmitted by external operators. All statutory safe-harbor protections apply fully.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Main Screen Unified 2-Column Footer */}
      <Footer />
    </div>
  );
}
