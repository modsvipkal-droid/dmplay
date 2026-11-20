import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  Wallet,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Clock,
  Banknote,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "DM Play Withdrawal: 3 Min Instant Payout & Proof Guide",
  },
  description:
    "Direct DM Play withdrawal portal. Complete your 3-5 minute UPI & bank card payout from ₹110 minimum, check real ₹5,000 proof, and fix pending delays fast",
  alternates: {
    canonical: `${siteConfig.url}/dm-play-withdrawal`,
  },
  openGraph: {
    title: "DM Play Withdrawal: 3 Min Instant Payout & Proof Guide",
    description:
      "Direct DM Play withdrawal portal. Complete your 3-5 minute UPI & bank card payout from ₹110 minimum, check real ₹5,000 proof, and fix pending delays fast",
    url: `${siteConfig.url}/dm-play-withdrawal`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/dmplay-icon.webp`,
        width: 640,
        height: 640,
        alt: "DM Play Withdrawal Guide & Verified Settlement Proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM Play Withdrawal: 3 Min Instant Payout & Proof Guide",
    description:
      "Direct DM Play withdrawal portal. Complete your 3-5 minute UPI & bank card payout from ₹110 minimum, check real ₹5,000 proof, and fix pending delays fast",
    images: [`${siteConfig.url}/dmplay-icon.webp`],
  },
};

const faqs = [
  {
    q: "DM Play me minimum aur maximum withdrawal limit kitni hai?",
    a: "DM Play par minimum withdrawal limit ₹110 hai aur maximum per transaction limit ₹20,000 se ₹50,000 tak hoti hai. VIP tier badhne par daily limits automatically increase ho jaati hain.",
  },
  {
    q: "Withdrawal request submit karne ke baad kitne time me paisa aata hai?",
    a: "Automated payment gateway se normal processing time 3 se 5 minute hota hai. Agar bank IMPS channel me congestion ho toh maximum 15 se 30 minute lag sakte hain.",
  },
  {
    q: "Kya withdrawal par koi platform fee ya tax deduct hota hai?",
    a: "Nahi, DM Play 0% platform fee policy follow karta hai. Aapka pura withdrawal amount bina kisi hidden deduction ke aapke bank account ya UPI ID me transfer hota hai.",
  },
  {
    q: "Withdrawal status pending dikha raha hai, kya karein?",
    a: "Agar status 10 minute se zyada pending rahe, toh confirm karein ki bank IFSC aur account details accurate hain. Public bank server maintenance timing me system auto-retry karta hai.",
  },
  {
    q: "Kya bina recharge kiye withdrawal lagaya ja sakta hai?",
    a: "Withdrawal lagane ke liye account security policy ke anusaar minimum deposit aur required game turnover complete hona zaroori hota hai taaki anti-money laundering verification satisfy ho sake.",
  },
  {
    q: "Ek din me kitni baar withdrawal laga sakte hain?",
    a: "Standard player tier par aap daily 3 se 5 successful withdrawals submit kar sakte hain. High VIP level players ke liye higher daily frequency available hoti hai.",
  },
  {
    q: "UPI ID galat enter ho gayi ho toh cancel kaise karein?",
    a: "Agar withdrawal abhi 'Pending Review' state me hai, toh turant DM Play customer care ya official Telegram desk par message karke transaction hold karwayein aur updated UPI link karein.",
  },
  {
    q: "Paisa wallet se kat gaya par bank me nahi aaya, kya karein?",
    a: "Apne withdrawal records se Order Number (jaise WD2026...) copy karein aur apne bank account statement ke sath customer support live chat par share karein. Bank UTR track karke 30 minute me resolve kiya jaata hai.",
  },
];

export default function DmPlayWithdrawalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/dm-play-withdrawal#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/dm-play-withdrawal`,
        },
        headline: "DM Play Withdrawal: Fast UPI Payouts & Proof Settlement Guide",
        description:
          "Direct DM Play withdrawal portal. Complete your 3-5 minute UPI & bank card payout from ₹110 minimum, check real ₹5,000 proof, and fix pending delays fast",
        inLanguage: "en-IN",
        mainEntityOfPage: `${siteConfig.url}/dm-play-withdrawal`,
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
        "@id": `${siteConfig.url}/dm-play-withdrawal#breadcrumb`,
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
            name: "DM Play Withdrawal",
            item: `${siteConfig.url}/dm-play-withdrawal`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/dm-play-withdrawal#faq`,
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
              Withdrawal Gateway
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
            <span className="font-semibold text-[#1E2637]">DM Play Withdrawal</span>
          </nav>

          {/* H1 Heading */}
          <div className="border-b border-[#F0E5E0] pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EAF8F0] bg-[#EBF8F1] px-3 py-1 text-xs font-bold text-[#18B660] mb-3">
              <Clock className="h-3.5 w-3.5" />
              Automated 3–5 Minute Payout Engine
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              DM Play Withdrawal: Fast UPI Payouts &amp; Proof Settlement Guide
            </h1>
          </div>

          {/* Quick Answer Box */}
          <div className="mt-8 rounded-3xl border-2 border-[#18B660]/30 bg-gradient-to-br from-[#F4FBF7] via-white to-[#EBF8F1] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E2637] flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-[#18B660]" />
              Quick Answer: Withdraw in 3 Simple Steps
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base text-[#4A5568] font-medium">
              <li>Open your dashboard via <Link href="/dm-play-login" className="text-[#FF5A3D] underline">/dm-play-login</Link> and navigate to <strong>Wallet &gt; Withdraw</strong>.</li>
              <li>Select your saved Indian Bank Card or personal UPI ID (starting from minimum ₹110).</li>
              <li>Enter your withdrawal amount, confirm your 6-digit security PIN, and receive funds in 3 to 5 minutes.</li>
            </ol>
            <div className="mt-5">
              <a
                href={LOGIN_URL}
                target="_self"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#18B660] to-[#129A4E] px-8 py-3.5 text-base font-extrabold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                ACCESS WITHDRAWAL PORTAL &rarr;
              </a>
            </div>
          </div>

          {/* Intro Text */}
          <div className="mt-8 text-base text-[#5A6578] leading-relaxed">
            <p>
              When evaluating gaming platforms, payout speed is the decisive factor. Players searching for <strong className="text-[#1E2637]">dm play withdrawal</strong>, <strong className="text-[#1E2637]">dmplay withdrawal</strong>, and reliable <strong className="text-[#1E2637]">dm play withdrawal proof</strong> want confirmation that real earnings reach their bank account without unnecessary hold-ups. This technical guide outlines the exact 3-minute cashout process, verified transaction evidence, and solutions for any <strong className="text-[#1E2637]">dm play withdrawal problem</strong>. New users can create an account on <Link href="/dm-play-register" className="text-[#FF5A3D] underline font-semibold">/dm-play-register</Link> first.
            </p>
          </div>

          {/* Sections Stack */}
          <div className="mt-12 space-y-12">
            {/* Step-by-Step Guide */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                How to withdraw funds on DM Play in 3 steps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                DM Play utilizes automated IMPS banking and dynamic UPI settlement. Follow this verified 3-step execution:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A5568]">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#18B660] text-xs font-bold text-white">1</span>
                  <p><strong className="text-[#1E2637]">Bind Payout Channel:</strong> In your profile center, link your Indian Bank Account (Account Number + IFSC) or your active UPI VPA (PhonePe, Google Pay, Paytm). Ensure the name matches your registered identity.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#18B660] text-xs font-bold text-white">2</span>
                  <p><strong className="text-[#1E2637]">Specify Amount:</strong> Choose from preset amounts (₹110, ₹500, ₹1,000, ₹5,000, ₹20,000) or enter a custom sum. Verify that your withdrawal turnover requirement is 100% fulfilled.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#18B660] text-xs font-bold text-white">3</span>
                  <p><strong className="text-[#1E2637]">Confirm with Transaction PIN:</strong> Enter your confidential security code. The system triggers the automated banking gateway, and funds reflect in your account within 3 to 5 minutes.</p>
                </div>
              </div>
            </section>

            {/* Verified Payout Proof Section */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Verified ₹5,000 withdrawal proof &amp; order settlement
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Transparency builds player trust. Below is an authentic transaction settlement proof from our verified player audit desk:
              </p>

              <div className="rounded-2xl border border-[#F0E5E0] bg-[#FFFDFC] p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="hero-phone relative shadow-md max-w-[200px]">
                  <Image
                    src="/step6-proof.webp"
                    alt="DM Play Verified Completed ₹5000 Withdrawal Proof with Order Number"
                    width={200}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-[18px]"
                  />
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#4A5568]">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF8F1] px-3 py-1 font-bold text-[#18B660]">
                    <CheckCircle2 className="h-4 w-4" />
                    Completed Payout Settlement
                  </div>
                  <p><strong className="text-[#1E2637]">Unique Order ID:</strong> <code className="font-mono text-xs bg-white px-2 py-1 rounded border border-[#F0E5E0]">WD20261113121622981104934c</code></p>
                  <p><strong className="text-[#1E2637]">Withdrawal Sum:</strong> ₹5,000.00 INR</p>
                  <p><strong className="text-[#1E2637]">Platform Handling Fee:</strong> ₹0.00 (Zero percent)</p>
                  <p><strong className="text-[#1E2637]">Settlement Channel:</strong> Instant Bank Card IMPS Transfer</p>
                  <p><strong className="text-[#1E2637]">Average Turnaround:</strong> 3 Minutes 42 Seconds</p>
                </div>
              </div>
            </section>

            {/* Withdrawal Specifications Comparison Table */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                DM Play withdrawal specifications vs outdated gaming apps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Compare DM Play&apos;s payout infrastructure against typical unverified prediction sites:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">Withdrawal Feature</th>
                      <th className="p-3.5">DM Play Automated Engine</th>
                      <th className="p-3.5">Unregulated Clone Apps</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Processing Speed</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">3 to 5 Minutes (Automated 24/7)</td>
                      <td className="p-3.5 text-[#FB5B5B]">24 to 72 Hours (Manual queues)</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Minimum Withdrawal</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">₹110 (Low beginner threshold)</td>
                      <td className="p-3.5 text-[#FB5B5B]">₹500 to ₹1,000 minimum lock</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Platform Handling Fee</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">0% Platform Deductions</td>
                      <td className="p-3.5 text-[#FB5B5B]">5% to 15% hidden processing fees</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Supported Gateways</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">All Indian Banks, PhonePe, Paytm, GPay</td>
                      <td className="p-3.5 text-[#FB5B5B]">Limited third-party merchant accounts</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Daily Payout Cycles</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">365 Days / 24 Hours continuous</td>
                      <td className="p-3.5 text-[#FB5B5B]">Banking hours only (No weekend payouts)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 Common Withdrawal Problems and Fixes */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                6 withdrawal problems and their exact fixes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                If your payout request faces unexpected delays, apply these verified technical resolutions:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">#</th>
                      <th className="p-3.5">Withdrawal Problem</th>
                      <th className="p-3.5">Root Cause</th>
                      <th className="p-3.5">Immediate Action / Exact Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">1</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Status Pending over 15 Mins&quot;</td>
                      <td className="p-3.5">Bank IMPS server maintenance (typical 11 PM to 2 AM)</td>
                      <td className="p-3.5">System auto-retries every 5 mins. If unresolved after 30 mins, contact Telegram support.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">2</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Insufficient Turnover / Bet Amount&quot;</td>
                      <td className="p-3.5">Recharge amount not fully wagered in games</td>
                      <td className="p-3.5">Check your turnover status. Play standard rounds on <Link href="/wingo-prediction-trick" className="text-[#FF5A3D] underline">/wingo-prediction-trick</Link> to satisfy requirement.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">3</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Bank IFSC / Account Number Mismatch&quot;</td>
                      <td className="p-3.5">Typo during bank card linking in profile</td>
                      <td className="p-3.5">Delete old bank card entry and re-bind with verified passbook IFSC details.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">4</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Exceeded Daily Withdrawal Count&quot;</td>
                      <td className="p-3.5">Submitted more than the tier limit for the day</td>
                      <td className="p-3.5">Wait until 00:00 midnight IST for counter reset, or upgrade VIP tier through gameplay.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">5</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Payment Gateway System Error&quot;</td>
                      <td className="p-3.5">Temporary API disconnect with clearing partner</td>
                      <td className="p-3.5">Amount auto-returns to your DM Play wallet within 15 minutes. Re-submit via UPI.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">6</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Account Under Anti-Fraud Review&quot;</td>
                      <td className="p-3.5">Sudden IP change or rapid withdrawal after login</td>
                      <td className="p-3.5">Review our <Link href="/dm-play-login" className="text-[#FF5A3D] underline">/dm-play-login</Link> unblock checklist and contact Telegram admin.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Payout Security Best Practices */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                5 payout security rules for Indian players
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                Keep your payout pipeline protected with these practical safety standards:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#4A5568]">
                <li><strong className="text-[#1E2637]">Match Beneficiary Identity:</strong> Always withdraw to a bank account or UPI handle that carries your own name to pass automated bank risk checks.</li>
                <li><strong className="text-[#1E2637]">Set an Independent Transaction PIN:</strong> Never use your main login password as your payment withdrawal PIN.</li>
                <li><strong className="text-[#1E2637]">Beware of &quot;Agent Withdrawal&quot; Scams:</strong> DM Play settlements are 100% automated. Never pay anyone on WhatsApp or Telegram claiming to &quot;release stuck funds&quot;.</li>
                <li><strong className="text-[#1E2637]">Verify With Invitation Perks:</strong> Registered under <Link href="/dm-play-invitation-code" className="text-[#FF5A3D] underline">/dm-play-invitation-code</Link> to ensure your account qualifies for priority server queue.</li>
                <li><strong className="text-[#1E2637]">Keep Transaction Records:</strong> Save order IDs for high-value withdrawals for quick reference during periodic banking audits.</li>
              </ul>
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
