import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  ShieldAlert,
  Cpu,
  ChevronRight,
  Gavel,
  Briefcase,
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Independent Technical SEO Project Disclosure",
  },
  description:
    "Official disclosure for dmplaylogin5.com. This domain is an independent technical SEO optimization and web development project. We do not promote gambling.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us | Independent Technical SEO Project Disclosure",
    description:
      "Official disclosure for dmplaylogin5.com. This domain is an independent technical SEO optimization and web development project. We do not promote gambling.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: `${siteConfig.url}/dmplay-most-popular-game-site-india.webp`,
        width: 1200,
        height: 630,
        alt: "DmPlay Most Popular Game Site India - Stable, Safe and Fast",
      },
    ],
  },
};

export default function AboutPage() {
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
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-[11px] text-[#7E8B9B]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#A9B4C2]" />
            <span className="font-semibold text-[#1E2637]">About &amp; Contractor Disclosure</span>
          </nav>

          {/* Page Heading */}
          <div className="mb-5 pb-4 border-b border-[#EFE7E2]">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2637]">
              About dmplaylogin5.com
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5E6B7E] leading-relaxed">
              Transparency documentation regarding the independent technical search optimization framework, contractor boundaries, and non-operational status.
            </p>
          </div>

          {/* CRITICAL LEGAL & CONTRACTOR DISCLAIMER BANNER - Soft & Compact */}
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
                  Independent Technical Assignment &bull; Non-Promotional Declaration
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4E5A6C]">
                  This domain (<strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong>) is created and optimized solely by an <strong className="text-[#1E2637]">independent third-party technical SEO contractor</strong>. We do not operate, own, manage, or sponsor any online casino, colour trading, or gaming operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-[#3E495B]">
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Game Ops:</strong> Zero gaming or betting operations.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Technical Scope:</strong> SEO speed &amp; Core Web Vitals only.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Zero Funds:</strong> No deposits, wallets, or payouts handled.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Cards - Compact & Soft */}
          <div className="space-y-3.5 text-xs sm:text-[13.5px] text-[#4E5A6C] leading-relaxed">
            {/* Section 1: Independent Contractor Nature */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF2EE] text-[#FF5A3D]">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">1. Nature of the Technical Engagement</h2>
              </div>
              <p>
                The administrators and developers maintaining this domain were commissioned strictly as external technical digital specialists. Our contractual mandate consists exclusively of:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li><strong className="text-[#1E2637]">Search Engine Architecture:</strong> Designing lightweight, responsive Next.js static layouts for high algorithmic crawl efficiency.</li>
                <li><strong className="text-[#1E2637]">Performance Auditing:</strong> Ensuring page delivery scores adhere to Google Core Web Vitals (LCP, INP, CLS benchmarks).</li>
                <li><strong className="text-[#1E2637]">Structured Schema Integration:</strong> Implementing Schema.org rich markup structures (Organization, WebSite, Breadcrumbs).</li>
              </ul>
              <p className="mt-2 pt-2 border-t border-[#F5EFEA] text-[12px] text-[#6E7B8E]">
                At no juncture do the developers or webmasters act as gaming operators, promoters, affiliate recruiters, or financial agents for any gaming brand.
              </p>
            </section>

            {/* Section 2: Non-Promotional Policy */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#F39838]">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">2. Absolute Non-Promotional &amp; Non-Endorsement Policy</h2>
              </div>
              <p>
                Any outward hyperlinks, buttons, or informational guides discussing game mechanics (e.g., WinGo, K3, 5D, Aviator) exist strictly as descriptive technical representations of external third-party software environments.
              </p>
              <div className="mt-3 p-3 rounded-xl bg-[#FAF6F4] border border-[#EFE6E0] text-xs space-y-1.5">
                <p>
                  <strong className="text-[#1E2637]">Express Disclaimer:</strong> We do NOT encourage, endorse, entice, or solicit any visitor to play real-money games or deposit money. Real-money gaming involves substantial risk of financial loss and potential addiction. Users must exercise their own independent judgement and comply with local laws.
                </p>
                <p className="font-semibold text-[#1E2637]">
                  Please consult our mandatory <Link href="/responsible-gaming" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">18+ Responsible Gaming &amp; Player Protection Guidelines &rarr;</Link>
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Safe Harbor */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Gavel className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">3. Intermediary Safe Harbor (Section 79 IT Act)</h2>
              </div>
              <p>
                This website operates strictly within the statutory safe-harbor protections afforded to technical intermediaries under <strong className="text-[#1E2637]">Section 79 of the Information Technology Act, 2000 (India)</strong>:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li>This portal functions merely as a passive technical conduit transmitting or redirecting users to third-party endpoints.</li>
                <li>The technical contractors do not initiate the transmission, do not select the receiver, and do not modify external transmission data.</li>
                <li>We observe strict due diligence regarding intermediary guidelines and data security standards.</li>
              </ul>
            </section>

            {/* Section 4: Technical Architecture */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#4A9FE8]">
                  <Cpu className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">4. Technical Web Architecture</h2>
              </div>
              <p>
                From an engineering standpoint, <strong className="text-[#1E2637]">dmplaylogin5.com</strong> is built on modern lightweight open-web technologies:
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-base font-extrabold text-[#18B660]">100% Static</span>
                  <span className="text-[11px] text-[#6E7B8E]">Next.js Prerendered</span>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-base font-extrabold text-[#4A9FE8]">256-Bit</span>
                  <span className="text-[11px] text-[#6E7B8E]">TLS 1.3 Transport</span>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-2.5">
                  <span className="block text-base font-extrabold text-[#FF5A3D]">0 Storage</span>
                  <span className="text-[11px] text-[#6E7B8E]">No Credentials Stored</span>
                </div>
              </div>
            </section>

            {/* Quick Navigation Links */}
            <div className="rounded-2xl border border-[#EFE7E2] bg-[#FAF8F6] p-4 text-xs text-[#5E6B7E]">
              <h3 className="font-bold text-[#1E2637] text-xs uppercase tracking-wider mb-2">Supporting Governance &amp; Policy Resources</h3>
              <div className="flex flex-wrap gap-2 pt-0.5">
                <Link href="/privacy" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Privacy Policy &rarr;
                </Link>
                <Link href="/terms" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Terms &amp; Conditions &rarr;
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
