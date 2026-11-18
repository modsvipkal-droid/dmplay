import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  ShieldAlert,
  AlertTriangle,
  Scale,
  Clock,
  Coins,
  HeartHandshake,
  ChevronRight,
  LifeBuoy,
  Briefcase,
  AlertOctagon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Gaming (18+) & Independent Contractor Risk Disclosure",
  description:
    "Strict 18+ player protection policy, financial risk warnings, and independent technical SEO contractor disclosure for dmplaylogin5.com. We do not promote gambling.",
  alternates: {
    canonical: `${siteConfig.url}/responsible-gaming`,
  },
  openGraph: {
    title: "Responsible Gaming (18+) & Independent Contractor Risk Disclosure",
    description:
      "Strict 18+ player protection policy, financial risk warnings, and independent technical SEO contractor disclosure for dmplaylogin5.com. We do not promote gambling.",
    url: `${siteConfig.url}/responsible-gaming`,
  },
};

export default function ResponsibleGamingPage() {
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
            <span className="font-semibold text-[#1E2637]">Responsible Gaming &amp; Disclaimers</span>
          </nav>

          {/* CRITICAL TECHNICAL CONTRACTOR & RISK STATEMENT */}
          <div className="rounded-3xl border-2 border-[#FB5B5B]/40 bg-gradient-to-br from-[#FFF5F3] via-[#FFEBE8] to-[#FFF0EC] p-6 sm:p-8 shadow-md mb-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FB5B5B] text-white shadow-sm">
                <AlertOctagon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FB5B5B]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FB5B5B]">
                  Contractor Safe Harbor &amp; Risk Notice
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1E2637] tracking-tight">
                  Independent SEO Development Assignment &bull; Non-Endorsement Notice
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] font-medium">
                  <strong className="text-[#1E2637] font-bold">LEGAL CLARIFICATION:</strong> The creators, technical webmasters, and SEO developers of <strong className="font-mono text-[#1E2637]">dmplaylogin5.com</strong> are external freelance/agency contractors hired exclusively for search engine optimization (SEO), performance metrics, and web design.
                </p>
                <div className="rounded-2xl bg-white/80 p-4 border border-[#F2D7D2] text-xs sm:text-sm text-[#3E495B] space-y-2">
                  <p>
                    &bull; <strong className="text-[#1E2637]">We Do NOT Promote Gaming:</strong> We do not operate, own, endorse, or promote any online game, betting, or wagering activities.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">High Financial Risk:</strong> Online games involving money carry a severe risk of monetary loss. Never view online games as an investment or regular income opportunity.
                  </p>
                  <p>
                    &bull; <strong className="text-[#1E2637]">Zero Liability:</strong> The technical contractor bears zero responsibility for external third-party actions, transactions, or losses incurred on external platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 18+ Age Restriction Highlight Box */}
          <div className="rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-r from-[#FFF5F1] to-[#FFEBE4] p-6 sm:p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF5A3D] text-white font-black text-2xl shadow-md">
                18+
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1E2637]">Strictly Prohibited for Minors (Under 18 Years)</h2>
                <p className="mt-2 text-sm sm:text-base text-[#5A6578] leading-relaxed">
                  Access to real-money online gaming is strictly restricted to adults aged <strong className="text-[#1E2637]">18 years or older</strong>. Minors are legally forbidden from registering or participating. Parents and guardians are strongly advised to install child-safety filter software (e.g., Net Nanny, Qustodio) to restrict underage access.
                </p>
              </div>
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Severe Financial Risk Warning */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">1. Realistic Assessment of Financial Probability &amp; Risk</h2>
              </div>
              <p>
                All prediction and multiplier games operate under mathematical algorithms and probability curves. The house or platform operator retains mathematical advantages. Please understand the reality of online gaming:
              </p>
              <ul className="mt-4 space-y-2.5 list-disc pl-5">
                <li><strong className="text-[#1E2637]">No Guaranteed Earnings:</strong> There is no system, prediction bot, or algorithm that guarantees winning outcomes. Any claims of guaranteed profits are fraudulent.</li>
                <li><strong className="text-[#1E2637]">Only Play What You Can Afford to Lose:</strong> Treat any participation strictly as an entertainment expense (like a movie ticket), never an income plan.</li>
                <li><strong className="text-[#1E2637]">Do Not Borrow Money:</strong> Never take loans, borrow from acquaintances, or utilize credit cards to participate in gaming activities.</li>
                <li><strong className="text-[#1E2637]">Strictly Avoid Loss Chasing:</strong> When you experience a loss, step away immediately. Attempting to recover lost funds through bigger wagers leads directly to severe financial harm.</li>
              </ul>
            </section>

            {/* Self-Regulation Tools */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">2. Self-Imposed Limits &amp; Cooling-Off Tools</h2>
              </div>
              <p>
                Responsible players maintain absolute command over their screen time and financial allocations:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <Coins className="h-6 w-6 text-[#FF5A3D] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Strict Financial Caps</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Pre-determine a fixed daily budget. Once exhausted, do not top up under any circumstance.</p>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <Clock className="h-6 w-6 text-[#54B0FD] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Time Boundaries</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Limit sessions to 20-30 minutes. Never sacrifice personal commitments or occupational duties.</p>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <LifeBuoy className="h-6 w-6 text-[#18B660] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Self-Exclusion</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Request a permanent or temporary account freeze directly via operator customer service.</p>
                </div>
              </div>
            </section>

            {/* Self-Assessment Checklist */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">3. Compulsive Gaming Self-Assessment</h2>
              <p>Regularly ask yourself these diagnostic questions:</p>
              <ul className="mt-4 space-y-2 text-sm text-[#5A6578]">
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
              <div className="mt-4 p-4 rounded-xl bg-[#FFF2EE] border border-[#FFE7DF] text-xs font-semibold text-[#FB5B5B]">
                If you answered &ldquo;Yes&rdquo; to any question, please halt all participation immediately and seek independent support.
              </div>
            </section>

            {/* Independent Support Contacts */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">4. Independent Counseling Resources</h2>
              </div>
              <p>
                Free, non-judgmental, confidential assistance is available worldwide:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <h3 className="font-bold text-[#1E2637]">BeGambleAware (Global)</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">24/7 free confidential helpline, self-exclusion advice, and clinical support.</p>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#54B0FD] hover:underline">
                    Visit begambleaware.org &rarr;
                  </a>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <h3 className="font-bold text-[#1E2637]">Gamblers Anonymous (International)</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">International fellowship providing step-based recovery meetings worldwide.</p>
                  <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#54B0FD] hover:underline">
                    Visit gamblersanonymous.org &rarr;
                  </a>
                </div>
              </div>
            </section>

            {/* Supporting Legal & Technical Resources */}
            <div className="rounded-3xl border border-[#F0E5E0] bg-[#FFF9F7] p-6 text-sm text-[#5A6578]">
              <h3 className="font-bold text-[#1E2637] text-base mb-2">Supporting Governance &amp; Portal Information</h3>
              <p>
                To understand our technical operations, contractor status, and data confidentiality frameworks, please explore our supporting resources:
              </p>
              <div className="mt-4 flex flex-wrap gap-4 font-semibold text-[#1E2637]">
                <Link href="/about" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">About Technical Contractor &rarr;</Link>
                <Link href="/terms" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">Terms &amp; Conditions &rarr;</Link>
                <Link href="/privacy" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">Privacy Policy &rarr;</Link>
                <Link href="/" className="text-[#1E2637] underline underline-offset-2 hover:text-[#FF5A3D]">Homepage Guide &rarr;</Link>
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
