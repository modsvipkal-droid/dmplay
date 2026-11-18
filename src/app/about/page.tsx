import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  ShieldAlert,
  Cpu,
  Lock,
  ChevronRight,
  Gavel,
  Briefcase,
  AlertTriangle,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Independent Technical SEO Project & Legal Disclosure",
  description:
    "Official disclosure regarding dmplaylogin5.com. This domain is an independent technical SEO optimization and web development project. We do not operate or promote gambling.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us | Independent Technical SEO Project & Legal Disclosure",
    description:
      "Official disclosure regarding dmplaylogin5.com. This domain is an independent technical SEO optimization and web development project. We do not operate or promote gambling.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#717A8A]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#1E2637]">About &amp; Contractor Disclosure</span>
          </nav>

          {/* CRITICAL LEGAL & CONTRACTOR DISCLAIMER BANNER */}
          <div className="rounded-3xl border-2 border-[#FB5B5B]/40 bg-gradient-to-br from-[#FFF5F3] via-[#FFEBE8] to-[#FFF0EC] p-6 sm:p-8 shadow-md mb-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FB5B5B] text-white shadow-sm">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FB5B5B]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FB5B5B]">
                  Crucial Mandatory Legal Statement
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1E2637] tracking-tight">
                  Independent Technical SEO Assignment &bull; Non-Promotional Declaration
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] font-medium">
                  <strong className="text-[#1E2637] font-bold">PLEASE READ CAREFULLY:</strong> This website (<strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong>) has been developed, designed, and optimized solely by an <strong className="text-[#1E2637]">independent third-party technical web development and search engine optimization (SEO) contractor</strong>. 
                </p>
                <div className="rounded-2xl bg-white/80 p-4 border border-[#F2D7D2] text-xs sm:text-sm text-[#3E495B] space-y-2">
                  <p>
                    &bull; <strong className="text-[#1E2637]">No Game Operation or Promotion:</strong> We do NOT own, operate, manage, license, sponsor, promote, or encourage participation in any online casino, colour trading, wagering, betting, or real-money gaming operations.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Technical Scope of Work:</strong> Our professional scope is strictly limited to technical search engine optimization (SEO ranking architecture, Core Web Vitals optimization, static HTML prerendering, and schema markup) performed pursuant to an independent development contract.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Zero Financial Involvement:</strong> We do NOT handle, process, intermediate, deposit, or disburse any player funds, bets, or withdrawals. No transactional accounts exist on this domain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E2637]">
              About dmplaylogin5.com
            </h1>
            <p className="mt-3 text-base text-[#5A6578] leading-relaxed">
              Comprehensive transparency documentation outlining the technological framework, independent contractor status, and strict non-operational legal boundaries governing this web property.
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Section 1: Independent Contractor Nature */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2EE] text-[#FF5A3D]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">1. Nature of the Technical Engagement</h2>
              </div>
              <p>
                The administrators and developers maintaining this domain were commissioned strictly as external technical digital specialists. Our contractual mandate consists exclusively of:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li><strong className="text-[#1E2637]">Search Engine Architecture:</strong> Designing lightweight, responsive Next.js static layouts for high algorithmic crawl efficiency.</li>
                <li><strong className="text-[#1E2637]">Performance Auditing:</strong> Ensuring page delivery scores adhere to Google Core Web Vitals (LCP, INP, CLS benchmarks).</li>
                <li><strong className="text-[#1E2637]">Structured Schema Integration:</strong> Implementing W3C and Schema.org rich markup structures (Organization, WebSite, Breadcrumbs).</li>
              </ul>
              <p className="mt-3">
                At no juncture do the developers or webmasters act as gaming operators, promoters, affiliate recruiters, or financial agents for any gaming brand.
              </p>
            </section>

            {/* Section 2: Non-Promotional Policy */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">2. Absolute Non-Promotional &amp; Non-Endorsement Policy</h2>
              </div>
              <p>
                Any outward hyperlinks, buttons, or informational guides discussing game mechanics (e.g., WinGo, K3, 5D, Aviator) exist strictly as descriptive technical representations of external third-party software environments. 
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF8F5] border border-[#F0E5E0] text-xs sm:text-sm text-[#4A5568] space-y-2">
                <p>
                  <strong className="text-[#1E2637]">Express Disclaimer:</strong> We do NOT encourage, endorse, entice, or solicit any visitor to play real-money games or deposit money. We expressly warn all users that real-money gaming involves substantial risk of financial loss and potential addiction. Users must exercise their own independent judgement and comply with their regional laws.
                </p>
                <p className="pt-2 border-t border-[#F0E5E0] font-semibold text-[#1E2637]">
                  Please consult our mandatory <Link href="/responsible-gaming" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">18+ Responsible Gaming &amp; Player Protection Guidelines &rarr;</Link>
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Safe Harbor */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Gavel className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">3. Intermediary Safe Harbor (Section 79 IT Act)</h2>
              </div>
              <p>
                This website operates strictly within the statutory safe-harbor protections afforded to technical intermediaries under <strong className="text-[#1E2637]">Section 79 of the Information Technology Act, 2000 (India)</strong> and equivalent international intermediary liability doctrines:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>This portal functions merely as a passive technical conduit transmitting or redirecting users to third-party endpoints.</li>
                <li>The technical contractors do not initiate the transmission, do not select the receiver of the transmission, and do not modify the information contained in the external transmission.</li>
                <li>We observe strict due diligence regarding intermediary guidelines and data security standards.</li>
              </ul>
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF9F7] border border-[#F0E5E0] text-xs sm:text-sm text-[#4A5568] flex flex-wrap gap-4 font-semibold">
                <Link href="/privacy" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">Review Privacy Policy &rarr;</Link>
                <Link href="/terms" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">Review Terms &amp; Conditions &rarr;</Link>
                <Link href="/" className="text-[#1E2637] underline underline-offset-2 hover:text-[#FF5A3D]">Return to DM Play Login Portal &rarr;</Link>
              </div>
            </section>

            {/* Section 4: Technical Architecture */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">4. Technical Web Architecture</h2>
              </div>
              <p>
                From an engineering standpoint, <strong className="text-[#1E2637]">dmplaylogin5.com</strong> is built on cutting-edge open web technologies:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#18B660]">100% Static</span>
                  <span className="text-xs text-[#5A6578]">Next.js Prerendering</span>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#54B0FD]">256-Bit</span>
                  <span className="text-xs text-[#5A6578]">TLS 1.3 Transport</span>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4">
                  <span className="block text-xl font-extrabold text-[#FF5A3D]">0 Storage</span>
                  <span className="text-xs text-[#5A6578]">No Credentials Stored</span>
                </div>
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
