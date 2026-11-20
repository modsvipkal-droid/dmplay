import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  Scale,
  Clock,
  Coins,
  HeartHandshake,
  ChevronRight,
  LifeBuoy,
  AlertOctagon,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Responsible Gaming (18+) | Risk & Safe Harbor Disclosure",
  },
  description:
    "Strict 18+ player protection policy, financial risk warnings, and independent technical SEO contractor disclosure for dmplaylogin5.com. We do not promote gambling.",
  alternates: {
    canonical: `${siteConfig.url}/responsible-gaming`,
  },
  openGraph: {
    title: "Responsible Gaming (18+) | Risk & Safe Harbor Disclosure",
    description:
      "Strict 18+ player protection policy, financial risk warnings, and independent technical SEO contractor disclosure for dmplaylogin5.com. We do not promote gambling.",
    url: `${siteConfig.url}/responsible-gaming`,
    images: [
      {
        url: `${siteConfig.url}/dmplay-icon.webp`,
        width: 640,
        height: 640,
        alt: "DM Play Responsible Gaming 18+",
      },
    ],
  },
};

export default function ResponsibleGamingPage() {
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
            <span className="font-semibold text-[#1E2637]">Responsible Gaming &amp; Disclaimers</span>
          </nav>

          {/* Page Heading */}
          <div className="mb-5 pb-4 border-b border-[#EFE7E2]">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2637]">
              Responsible Gaming &amp; Player Safety
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5E6B7E] leading-relaxed">
              Mandatory player protection protocols, mathematical risk disclosures, and independent SEO developer safe-harbor boundaries for <strong className="text-[#1E2637]">dmplaylogin5.com</strong>.
            </p>
          </div>

          {/* CRITICAL TECHNICAL CONTRACTOR & RISK STATEMENT - Soft & Compact */}
          <div className="rounded-2xl border border-[#FAD8D0] bg-gradient-to-r from-[#FFF7F5] via-[#FFF3EF] to-[#FFF6F4] p-4 sm:p-5 shadow-[0_2px_10px_rgba(255,90,61,0.03)] mb-4">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFEAE5] text-[#E0482B] shadow-2xs">
                <AlertOctagon className="h-5 w-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8E2] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#D84328]">
                  Contractor Safe Harbor &amp; Risk Notice
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#1E2637] tracking-tight">
                  Independent SEO Development Assignment &bull; Non-Endorsement Notice
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4E5A6C]">
                  The creators of <strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong> are independent technical SEO contractors hired exclusively for search engine optimization, performance metrics, and responsive layout architecture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-[#3E495B]">
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>No Endorsement:</strong> We do NOT promote or operate gaming.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Financial Risk:</strong> High risk of monetary loss exists.</span>
                  </div>
                  <div className="flex items-start gap-1.5 rounded-lg bg-white/80 p-2 border border-[#F2DDD7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#18B660] shrink-0 mt-0.5" />
                    <span><strong>Zero Liability:</strong> Contractor bears no external liability.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 18+ Age Restriction Highlight Box - Soft & Compact */}
          <div className="rounded-2xl border border-[#FCE2D8] bg-gradient-to-r from-[#FFF8F5] to-[#FFF3EE] p-4 sm:p-4.5 mb-5 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF5A3D] text-white font-black text-lg shadow-sm">
                18+
              </div>
              <div className="flex-1">
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">Strictly Prohibited for Minors (Under 18 Years)</h2>
                <p className="mt-0.5 text-xs sm:text-[13px] text-[#5A6578] leading-relaxed">
                  Real-money gaming access is strictly restricted to adults aged <strong className="text-[#1E2637]">18 years or older</strong>. Minors are legally forbidden from registering or participating. Parents should install child-safety filter software (e.g., Net Nanny, Qustodio).
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Content Cards - Compact & Soft */}
          <div className="space-y-3.5 text-xs sm:text-[13.5px] text-[#4E5A6C] leading-relaxed">
            {/* Severe Financial Risk Warning */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF5EB] text-[#F39838]">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">1. Realistic Assessment of Financial Probability &amp; Risk</h2>
              </div>
              <p>
                All prediction and multiplier games operate under mathematical algorithms and probability curves. The platform retains mathematical advantages:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-4 text-xs sm:text-[13px]">
                <li><strong className="text-[#1E2637]">No Guaranteed Earnings:</strong> There is no system, prediction bot, or algorithm that guarantees winning outcomes. Any claims of guaranteed profits are fraudulent.</li>
                <li><strong className="text-[#1E2637]">Only Play What You Can Afford to Lose:</strong> Treat any participation strictly as an entertainment expense (like a movie ticket), never an income plan.</li>
                <li><strong className="text-[#1E2637]">Do Not Borrow Money:</strong> Never take loans, borrow from acquaintances, or utilize credit cards to participate in gaming activities.</li>
                <li><strong className="text-[#1E2637]">Strictly Avoid Loss Chasing:</strong> When you experience a loss, step away immediately. Attempting to recover lost funds leads to severe financial harm.</li>
              </ul>
            </section>

            {/* Self-Regulation Tools */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF8F1] text-[#18B660]">
                  <Scale className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">2. Self-Imposed Limits &amp; Cooling-Off Tools</h2>
              </div>
              <p>
                Responsible players maintain absolute command over their screen time and financial allocations:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-3 text-center">
                  <Coins className="h-5 w-5 text-[#FF5A3D] mx-auto mb-1.5" />
                  <h3 className="font-bold text-[#1E2637] text-xs">Financial Caps</h3>
                  <p className="mt-0.5 text-[11px] text-[#6E7B8E]">Pre-determine a daily budget. Never exceed it.</p>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-3 text-center">
                  <Clock className="h-5 w-5 text-[#4A9FE8] mx-auto mb-1.5" />
                  <h3 className="font-bold text-[#1E2637] text-xs">Time Limits</h3>
                  <p className="mt-0.5 text-[11px] text-[#6E7B8E]">Limit sessions to 20-30 mins. Take regular breaks.</p>
                </div>
                <div className="rounded-xl border border-[#EFE7E2] bg-[#FAF8F6] p-3 text-center">
                  <LifeBuoy className="h-5 w-5 text-[#18B660] mx-auto mb-1.5" />
                  <h3 className="font-bold text-[#1E2637] text-xs">Self-Exclusion</h3>
                  <p className="mt-0.5 text-[11px] text-[#6E7B8E]">Request an account freeze via operator support.</p>
                </div>
              </div>
            </section>

            {/* Self-Assessment Checklist */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <h2 className="text-sm sm:text-base font-bold text-[#1E2637] mb-2">3. Compulsive Gaming Self-Assessment</h2>
              <p>Regularly ask yourself these diagnostic questions:</p>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-[13px] text-[#5A6578]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Have you ever spent money on gaming that was designated for rent, utilities, or family necessities?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Do you feel irritable, anxious, or restless when attempting to reduce your screen time?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Have you concealed or lied about your gaming habits to family members or close friends?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Do you view gaming as a potential escape from personal anxiety, depression, or boredom?</span>
                </li>
              </ul>
              <div className="mt-3 p-3 rounded-xl bg-[#FFF2EE] border border-[#FFE7DF] text-xs font-semibold text-[#FB5B5B]">
                If you answered &ldquo;Yes&rdquo; to any question, please halt all participation immediately and seek independent support.
              </div>
            </section>

            {/* Independent Support Contacts */}
            <section className="rounded-2xl border border-[#EFE7E2] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(25,20,15,0.02)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF6FF] text-[#4A9FE8]">
                  <HeartHandshake className="h-4 w-4" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#1E2637]">4. Independent Counseling Resources</h2>
              </div>
              <p>
                Free, non-judgmental, confidential assistance is available worldwide:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#FAF8F6] border border-[#EFE7E2]">
                  <h3 className="font-bold text-[#1E2637] text-xs">BeGambleAware (Global)</h3>
                  <p className="mt-0.5 text-[11px] text-[#6E7B8E]">24/7 free confidential helpline, self-exclusion advice, and clinical support.</p>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#4A9FE8] hover:underline">
                    Visit begambleaware.org &rarr;
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F6] border border-[#EFE7E2]">
                  <h3 className="font-bold text-[#1E2637] text-xs">Gamblers Anonymous (International)</h3>
                  <p className="mt-0.5 text-[11px] text-[#6E7B8E]">International fellowship providing step-based recovery meetings worldwide.</p>
                  <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#4A9FE8] hover:underline">
                    Visit gamblersanonymous.org &rarr;
                  </a>
                </div>
              </div>
            </section>

            {/* Quick Navigation Links */}
            <div className="rounded-2xl border border-[#EFE7E2] bg-[#FAF8F6] p-4 text-xs text-[#5E6B7E]">
              <h3 className="font-bold text-[#1E2637] text-xs uppercase tracking-wider mb-2">Supporting Governance &amp; Policy Resources</h3>
              <div className="flex flex-wrap gap-2 pt-0.5">
                <Link href="/about" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  About Technical Contractor &rarr;
                </Link>
                <Link href="/terms" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Terms &amp; Conditions &rarr;
                </Link>
                <Link href="/privacy" className="inline-flex items-center rounded-lg bg-white border border-[#EFE7E2] px-2.5 py-1 text-xs font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D] transition-colors shadow-2xs">
                  Privacy Policy &rarr;
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
