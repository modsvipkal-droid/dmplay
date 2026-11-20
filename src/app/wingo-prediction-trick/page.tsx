import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Wingo Prediction Trick: 1 Min Chart Strategy & Big Small Guide",
  },
  description:
    "Master the Wingo prediction trick on DM Play. Learn the 1-minute chart strategy, big small parity patterns, budget rules, and avoid fake telegram bot scams",
  alternates: {
    canonical: `${siteConfig.url}/wingo-prediction-trick`,
  },
  openGraph: {
    title: "Wingo Prediction Trick: 1 Min Chart Strategy & Big Small Guide",
    description:
      "Master the Wingo prediction trick on DM Play. Learn the 1-minute chart strategy, big small parity patterns, budget rules, and avoid fake telegram bot scams",
    url: `${siteConfig.url}/wingo-prediction-trick`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/dmplay-most-popular-game-site-india.webp`,
        width: 1200,
        height: 630,
        alt: "DmPlay Most Popular Game Site India - Stable, Safe and Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wingo Prediction Trick: 1 Min Chart Strategy & Big Small Guide",
    description:
      "Master the Wingo prediction trick on DM Play. Learn the 1-minute chart strategy, big small parity patterns, budget rules, and avoid fake telegram bot scams",
    images: [`${siteConfig.url}/dmplay-most-popular-game-site-india.webp`],
  },
};

const faqs = [
  {
    q: "Kya Wingo 1 minute me koi guaranteed winning trick hoti hai?",
    a: "Nahi, DM Play cryptographically certified Random Number Generator (RNG) par kaam karta hai, isliye koi bhi 100% guaranteed trick nahi hoti. Safal khiladi chart trend analysis aur strict budget management par rely karte hain.",
  },
  {
    q: "Wingo colour prediction chart ko kaise read karein?",
    a: "Chart me pichhle 10 se 20 rounds ke outcome dekhein. Check karein ki Red ya Green ka continuous streak chal raha hai ya 1-by-1 alternate pattern (Red-Green-Red). Trend ke anusaar disciplined orders place karein.",
  },
  {
    q: "Wingo Big Small game me kya probability hoti hai?",
    a: "Big (numbers 5-9) aur Small (numbers 0-4) me 50/50 probability distribution hota hai. Isme 2x multiplier milta hai, jo naye khiladiyon ke liye balanced risk option maana jaata hai.",
  },
  {
    q: "Kya Telegram prediction channels par vishwas karna chahiye?",
    a: "Kisi bhi aisi channel par bharosa na karein jo guaranteed results ya paid mod hack APKs bechti hai. Official Telegram group sirf genuine analytical community discussion ke liye use karein.",
  },
  {
    q: "Wingo me loss recovery ke liye kaunsa formula best hai?",
    a: "Level-based budget plan (jaise 1x-3x-9x multi-tier capital allocation) sabse popular formula hai. Par hamesha apna maximum loss limit pehle se tay karein aur limit cross hone par play pause karein.",
  },
  {
    q: "Violet colour kab aata hai aur iska payout kitna hai?",
    a: "Violet colour tab draw hota hai jab result number 0 ya 5 aata hai. 0 par Red + Violet aur 5 par Green + Violet banta hai. Violet predict karne par 4.5x multiplier return milta hai.",
  },
  {
    q: "Wingo 30s aur Wingo 1 minute me kya antar hai?",
    a: "Wingo 30s me har 30 seconds me rapid countdown draw hota hai, jabki Wingo 1 min me 60 seconds ka analytical time milta hai jisme khiladi chart trend ko aaram se dekh sakte hain.",
  },
  {
    q: "Wingo game me jeeta hua paisa kitne time me withdraw hota hai?",
    a: "DM Play par Wingo se jeeti hui rashi 3 se 5 minute ke andar seedhe aapke bank account ya UPI me transfer ho jaati hai. Detail ke liye hamara withdrawal guide dekhein.",
  },
];

export default function WingoPredictionTrickPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/wingo-prediction-trick#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/wingo-prediction-trick`,
        },
        headline: "Wingo Prediction Trick: 1 Minute Chart Trends & Big Small Game Guide",
        description:
          "Master the Wingo prediction trick on DM Play. Learn the 1-minute chart strategy, big small parity patterns, budget rules, and avoid fake telegram bot scams",
        inLanguage: "en-IN",
        mainEntityOfPage: `${siteConfig.url}/wingo-prediction-trick`,
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
        "@id": `${siteConfig.url}/wingo-prediction-trick#breadcrumb`,
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
            name: "Wingo Prediction Trick",
            item: `${siteConfig.url}/wingo-prediction-trick`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/wingo-prediction-trick#faq`,
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
              href="/dm-play-login"
              className="text-xs sm:text-sm font-semibold text-[#5A6578] hover:text-[#FF5A3D] transition-colors px-2 py-1"
            >
              &larr; Login
            </Link>
            <a
              href={LOGIN_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Play WinGo Live
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
            <span className="font-semibold text-[#1E2637]">Wingo Prediction Trick</span>
          </nav>

          {/* H1 Heading */}
          <div className="border-b border-[#F0E5E0] pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3 py-1 text-xs font-bold text-[#FF5A3D] mb-3">
              <TrendingUp className="h-3.5 w-3.5" />
              Strategic Analytical Gaming
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              Wingo Prediction Trick: 1 Minute Chart Trends &amp; Big Small Game Guide
            </h1>
          </div>

          {/* Quick Strategy Summary Box */}
          <div className="mt-8 rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-br from-[#FFF5F3] via-white to-[#FFF0EC] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E2637] flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-[#FF5A3D]" />
              Quick Summary: Core Wingo Analytical Strategy
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base text-[#4A5568] font-medium">
              <li>Track the <strong>colour prediction chart</strong>: Look for streak repetitions (Dragon patterns) and parity alternates (1-by-1 cycles).</li>
              <li>Favor the <strong>Big Small game</strong>: 50/50 probability offers predictable variance compared to single digits.</li>
              <li>Employ strict capital allocation: Divide balance into at least 7 stages to handle statistical swings without emotional tilt.</li>
            </ol>
            <div className="mt-5">
              <a
                href={LOGIN_URL}
                target="_self"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-8 py-3.5 text-base font-extrabold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                LAUNCH WINGO INTERFACE &rarr;
              </a>
            </div>
          </div>

          {/* Introduction */}
          <div className="mt-8 text-base text-[#5A6578] leading-relaxed">
            <p>
              In colour prediction gaming, understanding mathematical probability separates disciplined participants from arbitrary guessers. Search queries for <strong className="text-[#1E2637]">wingo prediction trick</strong>, <strong className="text-[#1E2637]">wingo 1 minute trick</strong>, <strong className="text-[#1E2637]">wingo big small trick</strong>, and <strong className="text-[#1E2637]">wingo colour prediction</strong> are amongst the highest volume terms in Indian online gaming. This guide breaks down genuine chart analysis methods, odds calculation, and risk budgeting. For account setup or login, access our <Link href="/dm-play-login" className="text-[#FF5A3D] underline font-semibold">/dm-play-login</Link> and <Link href="/dm-play-register" className="text-[#FF5A3D] underline font-semibold">/dm-play-register</Link> gateways.
            </p>
          </div>

          {/* Sections Stack */}
          <div className="mt-12 space-y-12">
            {/* Live Interface Screenshot */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Wingo interface &amp; countdown mechanics explained
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Wingo operates in fixed interval draw cycles: 30 seconds, 1 minute, 3 minutes, and 5 minutes. Below is the authentic live interface:
              </p>

              <div className="rounded-2xl border border-[#F0E5E0] bg-[#FFFDFC] p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="hero-phone relative shadow-md max-w-[200px]">
                  <Image
                    src="/step3-wingo.webp"
                    alt="DM Play Live WinGo Colour Trading Interface"
                    width={200}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-[18px]"
                  />
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#4A5568]">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF2EE] px-3 py-1 font-bold text-[#FF5A3D]">
                    <Zap className="h-4 w-4" />
                    Live Interface Components
                  </div>
                  <p><strong className="text-[#1E2637]">Countdown Clock:</strong> Real-time timer with final 5-second locking buffer.</p>
                  <p><strong className="text-[#1E2637]">Primary Selectors:</strong> Green, Violet, and Red color buttons with instant multiplier multipliers.</p>
                  <p><strong className="text-[#1E2637]">Numerical Board:</strong> Single digits 0 through 9 yielding up to 9x payout return.</p>
                  <p><strong className="text-[#1E2637]">Big / Small Selectors:</strong> 50/50 probability buckets (Big 5–9, Small 0–4).</p>
                  <p><strong className="text-[#1E2637]">Trend Chart Tab:</strong> Historical record of the last 100 round draws.</p>
                </div>
              </div>
            </section>

            {/* Wingo 1 Minute Trick & Chart Trends */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Wingo 1 minute trick: Reading the colour prediction chart
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                The essence of the <strong className="text-[#1E2637]">wingo 1 minute trick</strong> is recognizing streak formations on the historical chart rather than predicting isolated outcomes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 text-green-700">
                    1. The Parity Alternate Pattern (1-1)
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Occurs when outcomes flip continuously: Red &rarr; Green &rarr; Red &rarr; Green. When this sequence repeats 3 consecutive times, trend followers participate in the continuation until broken.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 text-blue-700">
                    2. The Double Pair Pattern (2-2)
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Occurs when colours appear in pairs: Red-Red followed by Green-Green. Recognizing a 2-2 pattern allows disciplined timing for second-stage participation.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 text-purple-700">
                    3. The Dragon Streak Pattern (Continuous)
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    A sequence of 5 or more identical colours in a row (e.g. 6 consecutive Greens). The classic statistical rule is: <em>never fight the dragon</em>; ride the streak with minimal stake.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 text-amber-700">
                    4. The Mirror Breakout Pattern (3-1-3)
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Three identical colours broken by an isolated single opposite colour before returning to the original dominant colour.
                  </p>
                </div>
              </div>
            </section>

            {/* Wingo Multipliers & Payout Structure */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Wingo payout multipliers &amp; statistical probability
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Understand exact multiplier ratios before placing orders:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">Selection</th>
                      <th className="p-3.5">Winning Numbers</th>
                      <th className="p-3.5">Payout Multiplier</th>
                      <th className="p-3.5">Statistical Nature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#18B660]">Green</td>
                      <td className="p-3.5">1, 3, 7, 9 (and 5 with Violet)</td>
                      <td className="p-3.5 font-semibold text-[#18B660]">2x (or 1.5x with Violet)</td>
                      <td className="p-3.5">High frequency outcome</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#FB5B5B]">Red</td>
                      <td className="p-3.5">2, 4, 6, 8 (and 0 with Violet)</td>
                      <td className="p-3.5 font-semibold text-[#FB5B5B]">2x (or 1.5x with Violet)</td>
                      <td className="p-3.5">High frequency outcome</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#B659FE]">Violet</td>
                      <td className="p-3.5">0 or 5</td>
                      <td className="p-3.5 font-semibold text-[#B659FE]">4.5x Multiplier</td>
                      <td className="p-3.5">Appears alongside Red (0) or Green (5)</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#54B0FD]">Big / Small</td>
                      <td className="p-3.5">Big (5-9) | Small (0-4)</td>
                      <td className="p-3.5 font-semibold text-[#54B0FD]">2x Multiplier</td>
                      <td className="p-3.5">Even 50/50 probability distribution</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Exact Number</td>
                      <td className="p-3.5">Exact single digit (0–9)</td>
                      <td className="p-3.5 font-bold text-[#FF5A3D]">9x Multiplier</td>
                      <td className="p-3.5">Higher risk, maximum yield</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 Common Prediction Mistakes and Fixes */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                6 prediction mistakes and their exact fixes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Avoid the most frequent behavioral pitfalls that cause player losses:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">#</th>
                      <th className="p-3.5">Common Player Mistake</th>
                      <th className="p-3.5">Psychological Cause</th>
                      <th className="p-3.5">Immediate Action / Exact Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">1</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">Chasing Losses (Emotional Tilt)</td>
                      <td className="p-3.5">Frustration over unexpected streak break</td>
                      <td className="p-3.5">Set a strict daily stop-loss. Walk away after 3 consecutive wrong rounds.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">2</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">Trusting &quot;100% Hack Bots&quot;</td>
                      <td className="p-3.5">Believing fake Telegram promoter claims</td>
                      <td className="p-3.5">Certified RNG cannot be hacked. Never buy paid software or mod APKs.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">3</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">All-In Single Round Wagers</td>
                      <td className="p-3.5">Impatience to double money instantly</td>
                      <td className="p-3.5">Never bet more than 2% to 5% of your total wallet balance in any single round.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">4</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">Ignoring Chart History</td>
                      <td className="p-3.5">Placing orders purely on random gut feelings</td>
                      <td className="p-3.5">Always review the last 15 outcomes before participating in a cycle.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">5</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">Not Withdrawing Earnings</td>
                      <td className="p-3.5">Greed to keep compounding profits</td>
                      <td className="p-3.5">Regularly transfer earnings to your bank via <Link href="/dm-play-withdrawal" className="text-[#FF5A3D] underline">/dm-play-withdrawal</Link>.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">6</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">Playing on Unverified Clone Sites</td>
                      <td className="p-3.5">Clicking third-party scam redirection ads</td>
                      <td className="p-3.5">Verify SSL certificate on <Link href="/dm-play-login" className="text-[#FF5A3D] underline">/dm-play-login</Link> before entering credentials.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Capital Allocation & Staking Strategy */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Disciplined 7-stage capital budgeting model
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                Professional statistical gaming relies on surviving negative variance. Divide your capital into 7 controlled stages:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 1</span>
                  <span className="text-base font-bold text-[#1E2637]">₹10</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 2</span>
                  <span className="text-base font-bold text-[#1E2637]">₹30</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 3</span>
                  <span className="text-base font-bold text-[#1E2637]">₹90</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 4</span>
                  <span className="text-base font-bold text-[#1E2637]">₹270</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 5</span>
                  <span className="text-base font-bold text-[#1E2637]">₹810</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 6</span>
                  <span className="text-base font-bold text-[#1E2637]">₹2,430</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="block text-xs text-[#A48C82]">Stage 7</span>
                  <span className="text-base font-bold text-[#1E2637]">₹7,290</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#EAF8F0] border border-[#BDE8D0]">
                  <span className="block text-xs text-[#18B660]">Recovery</span>
                  <span className="text-base font-bold text-[#18B660]">Balanced</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#5A6578]">
                *Advisory: Never borrow money to play. Staking models assist with probability distribution but do not eliminate the fundamental risk of chance-based games.
              </p>
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
