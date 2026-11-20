import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Gift,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Users,
  Copy,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "DM Play Invitation Code: 97569840601 Bonus & Commission Guide",
  },
  description:
    "Verified DM Play invitation code 97569840601. Apply during signup for welcome deposit bonuses, claim daily VIP commission rebates, and fix invalid code errors fast",
  alternates: {
    canonical: `${siteConfig.url}/dm-play-invitation-code`,
  },
  openGraph: {
    title: "DM Play Invitation Code: 97569840601 Bonus & Commission Guide",
    description:
      "Verified DM Play invitation code 97569840601. Apply during signup for welcome deposit bonuses, claim daily VIP commission rebates, and fix invalid code errors fast",
    url: `${siteConfig.url}/dm-play-invitation-code`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/dmplay-icon.webp`,
        width: 640,
        height: 640,
        alt: "DM Play Invitation Code 97569840601 Bonus Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM Play Invitation Code: 97569840601 Bonus & Commission Guide",
    description:
      "Verified DM Play invitation code 97569840601. Apply during signup for welcome deposit bonuses, claim daily VIP commission rebates, and fix invalid code errors fast",
    images: [`${siteConfig.url}/dmplay-icon.webp`],
  },
};

const faqs = [
  {
    q: "DM Play ka verified invitation code kya hai?",
    a: "DM Play ka verified active invitation code 97569840601 hai. Is code ko registration form par enter karne se aapka profile welcome deposit bonuses aur VIP commission privileges ke liye unlock hota hai.",
  },
  {
    q: "Kya bina invitation code ke DM Play par register ho sakta hai?",
    a: "Platform registration policy ke anusaar ek valid promoter invitation code zaroori hota hai taaki anti-bot security aur player referral tracking properly assign ho sake.",
  },
  {
    q: "Invitation code se kitna bonus milta hai?",
    a: "Code 97569840601 use karne par first deposit bonus match, daily streak check-in rewards aur up to ₹2,000,000 tak ki multi-level referral commissions earn karne ka chance milta hai.",
  },
  {
    q: "Agar registration ke time code nahi daala toh baad me add ho sakta hai kya?",
    a: "Nahi, invitation code sirf registration karte waqt hi bind kiya ja sakta hai. Ek baar account create hone ke baad referral tree permanently lock ho jaati hai.",
  },
  {
    q: "'Invalid Invitation Code' error aaye toh kya karein?",
    a: "Check karein ki code me koi typo ya space na ho. Active code 97569840601 copy karke paste karein ya hamare direct registration link se pre-filled page open karein.",
  },
  {
    q: "Invitation code aur Gift code me kya antar hai?",
    a: "Invitation code new registration ke time use hota hai, jabki Gift code active players ke liye daily promotions me diya jaata hai jisko 'Activity Center' me redeem kiya jaata hai.",
  },
  {
    q: "Apna khud ka invitation code kahan se dekhein?",
    a: "Login karne ke baad dashboard par 'Promotion' ya 'Invite' section me jayein. Wahan aapko aapka unique invite code aur personal shareable referral link mil jaayega.",
  },
  {
    q: "Referral commission kitne time me wallet me aati hai?",
    a: "Aapke invited members ke gameplay turnover par daily commission automatically calculate hokar har subah 01:00 AM IST tak aapke promotion wallet me credit kar di jaati hai.",
  },
];

export default function DmPlayInvitationCodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/dm-play-invitation-code#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/dm-play-invitation-code`,
        },
        headline: "DM Play Invitation Code: 97569840601 Bonus & Referral Rewards Guide",
        description:
          "Verified DM Play invitation code 97569840601. Apply during signup for welcome deposit bonuses, claim daily VIP commission rebates, and fix invalid code errors fast",
        inLanguage: "en-IN",
        mainEntityOfPage: `${siteConfig.url}/dm-play-invitation-code`,
        datePublished: "2026-01-15T00:00:00Z",
        dateModified: "2026-11-20T00:00:00Z",
        publisher: {
          "@type": "Organization",
          name: "DM Play",
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/dm-play-invitation-code#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DM Play Invitation Code",
            item: `${siteConfig.url}/dm-play-invitation-code`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/dm-play-invitation-code#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF7F4] text-[#1E2637]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
              href="/dm-play-register"
              className="text-xs sm:text-sm font-semibold text-[#5A6578] hover:text-[#FF5A3D] transition-colors px-2 py-1"
            >
              Sign Up &rarr;
            </Link>
            <a
              href={REGISTER_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Apply Code Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#717A8A]">
            <Link href="/" className="hover:text-[#FF5A3D] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#1E2637]">DM Play Invitation Code</span>
          </nav>

          {/* H1 Heading */}
          <div className="border-b border-[#F0E5E0] pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3 py-1 text-xs font-bold text-[#FF5A3D] mb-3">
              <Gift className="h-3.5 w-3.5" />
              Verified Invitation Referral Portal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              DM Play Invitation Code: 97569840601 Bonus &amp; Referral Rewards Guide
            </h1>
          </div>

          {/* Quick Answer Code Box */}
          <div className="mt-8 rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-br from-[#FFF5F3] via-white to-[#FFF0EC] p-6 sm:p-8 shadow-sm text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E2637] flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-[#FF5A3D]" />
              Active Verified Invitation Code:
            </h2>
            <div className="my-4 flex flex-col sm:flex-row items-center gap-3">
              <div className="rounded-2xl border-2 border-dashed border-[#FF5A3D] bg-white px-6 py-3 font-mono text-2xl sm:text-3xl font-black tracking-widest text-[#FF5A3D] shadow-inner">
                97569840601
              </div>
              <a
                href={REGISTER_URL}
                target="_self"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-6 py-3.5 text-base font-extrabold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                APPLY CODE &amp; REGISTER &rarr;
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#5A6578]">
              Pre-applied verified invitation code ensures account access to welcome deposit matches, VIP rebates, and fast-track withdrawal priority.
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 text-base text-[#5A6578] leading-relaxed">
            <p>
              When creating an account on DM Play, applying an authentic <strong className="text-[#1E2637]">dm play invitation code</strong> is the most critical step. Players searching for <strong className="text-[#1E2637]">dmplay invitation code</strong>, <strong className="text-[#1E2637]">dm play invite code</strong>, or <strong className="text-[#1E2637]">dm play referral code</strong> want to guarantee they receive maximum promotional benefits without being locked behind unverified affiliate traps. This guide details how to verify active code <code className="font-mono text-xs font-bold text-[#FF5A3D]">97569840601</code>, understand commission tiers, and resolve code errors. Existing players can proceed directly to <Link href="/dm-play-login" className="text-[#FF5A3D] underline font-semibold">/dm-play-login</Link>.
            </p>
          </div>

          {/* Sections Stack */}
          <div className="mt-12 space-y-12">
            {/* How to Apply the Code */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                How to apply DM Play invitation code in 3 steps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Binding your account to code 97569840601 is simple during the sign-up flow:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A5568]">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">1</span>
                  <p><strong className="text-[#1E2637]">Open Signup Gateway:</strong> Head to our <Link href="/dm-play-register" className="text-[#FF5A3D] underline">/dm-play-register</Link> screen to load the official phone registration interface.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">2</span>
                  <p><strong className="text-[#1E2637]">Locate the &quot;Invite Code&quot; Field:</strong> The fourth field on the registration form displays the referral slot. Verify that <code className="font-mono text-xs font-bold text-[#FF5A3D]">97569840601</code> is typed accurately.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">3</span>
                  <p><strong className="text-[#1E2637]">Submit &amp; Unlock Rewards:</strong> Tap &quot;Register&quot;. Your profile is instantly flagged with promotional permissions, unlocking welcome rebates and daily streak bonuses.</p>
                </div>
              </div>
            </section>

            {/* Member Benefits & Rebates Breakdown */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Invitation code benefits: What you receive
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Registering under verified invitation code 97569840601 unlocks these platform privileges:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <Gift className="h-4 w-4 text-[#FF5A3D]" />
                    Welcome Deposit Rebate
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Tiered introductory recharge bonus on your initial wallet deposit starting from ₹100.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#18B660]" />
                    Priority Withdrawal Queue
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Accounts tagged with verified promoter trees receive 3–5 minute automated clearing on <Link href="/dm-play-withdrawal" className="text-[#FF5A3D] underline">/dm-play-withdrawal</Link>.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-[#54B0FD]" />
                    Subordinate Team Commission
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Generate your own invitation code and earn multi-tier commissions up to ₹2,000,000 as your team plays.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#B659FE]" />
                    Daily Telegram Gift Codes
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Access exclusive daily gift drops released in the <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-[#54B0FD] underline font-semibold">Official Telegram Channel</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Commission & Referral Reward Tiers Table */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                DM Play referral &amp; commission tier structure
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Active promoters earn automated commissions across multiple subordinate tiers based on daily turnover:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">Referral Tier Level</th>
                      <th className="p-3.5">Turnover Commission Rebate</th>
                      <th className="p-3.5">Bonus Type</th>
                      <th className="p-3.5">Settlement Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Tier 1 (Direct Friends)</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">0.6% – 0.8% Total Turnover</td>
                      <td className="p-3.5">Direct Referral Share</td>
                      <td className="p-3.5">Daily 01:00 AM IST Auto-Credit</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Tier 2 (Secondary Friends)</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">0.18% – 0.25% Turnover</td>
                      <td className="p-3.5">Subordinate Team Share</td>
                      <td className="p-3.5">Daily 01:00 AM IST Auto-Credit</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Tier 3 (Extended Network)</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">0.05% – 0.08% Turnover</td>
                      <td className="p-3.5">Network Depth Bonus</td>
                      <td className="p-3.5">Daily 01:00 AM IST Auto-Credit</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Milestone Agent Bonus</td>
                      <td className="p-3.5 text-[#FF5A3D] font-bold">₹500 up to ₹2,000,000</td>
                      <td className="p-3.5">Cumulative Promotion Prize</td>
                      <td className="p-3.5">Instant Claim in Activity Center</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 Code Troubleshooting Problems and Fixes */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                6 invitation code problems and their exact fixes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Resolve code application hurdles with these tested technical steps:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">#</th>
                      <th className="p-3.5">Code Error Message</th>
                      <th className="p-3.5">Root Cause</th>
                      <th className="p-3.5">Immediate Action / Exact Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">1</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Invitation Code Does Not Exist&quot;</td>
                      <td className="p-3.5">Typo in numerical digits or trailing whitespace</td>
                      <td className="p-3.5">Delete field completely and re-enter <code className="font-mono text-xs">97569840601</code> carefully.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">2</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Promoter Tree Already Bound&quot;</td>
                      <td className="p-3.5">Attempting to add invite code to existing account</td>
                      <td className="p-3.5">Codes are fixed upon registration. Existing users cannot modify parent promoters.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">3</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Welcome Bonus Not Reflected&quot;</td>
                      <td className="p-3.5">Not manually claimed in the Activity Center</td>
                      <td className="p-3.5">Go to Account &gt; Activity &gt; Welcome Bonus and tap &quot;Claim&quot; to credit wallet.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">4</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Gift Code Expired / Used&quot;</td>
                      <td className="p-3.5">Limited quota reached on daily Telegram gift drop</td>
                      <td className="p-3.5">Turn on notifications on the Official Telegram Desk to claim time-sensitive drops.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">5</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Turnover Required for Commission&quot;</td>
                      <td className="p-3.5">Invited members have not placed prediction bets</td>
                      <td className="p-3.5">Commission accrues only on valid game turnover; guide members via <Link href="/wingo-prediction-trick" className="text-[#FF5A3D] underline">/wingo-prediction-trick</Link>.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">6</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Referral Link Leads to 404&quot;</td>
                      <td className="p-3.5">Using old domain alias that was updated by ISP</td>
                      <td className="p-3.5">Always share canonical links formatted through <code className="font-mono text-xs">dmplaylogin5.com</code>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-[#FF5A3D]" />
                FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-[#F0E5E0] bg-[#FFFDFC] p-4 sm:p-5">
                    <h3 className="font-bold text-base text-[#1E2637] mb-2">{f.q}</h3>
                    <p className="text-sm text-[#5A6578] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="rounded-3xl border-2 border-[#FB5B5B]/30 bg-[#FFF5F3] p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[#FB5B5B]" />
                Disclaimer
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                <strong className="text-[#1E2637]">18+ Player Advisory &amp; Statutory Notice:</strong> This portal is strictly intended for individuals aged 18 years and older residing in jurisdictions where online digital gaming is permitted by regional laws. Colour trading and online prediction games involve financial probability and risk of monetary loss. Only participate with discretionary entertainment funds that do not impact living expenses. The webmasters and technical operators of this site act solely as independent search optimization contractors and do not operate gaming platforms, accept wagers, or intermediate transactions. Users assume sole responsibility for compliance with all local laws.
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
