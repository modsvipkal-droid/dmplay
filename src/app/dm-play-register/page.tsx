import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  UserPlus,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Gift,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "DM Play Register: Online Account Sign Up & Welcome Bonus",
  },
  description:
    "Direct DM Play register portal. Complete your mobile signup in 6 steps with verified invite code 97569840601, claim welcome bonuses, and fix OTP errors fast",
  alternates: {
    canonical: `${siteConfig.url}/dm-play-register`,
  },
  openGraph: {
    title: "DM Play Register: Online Account Sign Up & Welcome Bonus",
    description:
      "Direct DM Play register portal. Complete your mobile signup in 6 steps with verified invite code 97569840601, claim welcome bonuses, and fix OTP errors fast",
    url: `${siteConfig.url}/dm-play-register`,
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
    title: "DM Play Register: Online Account Sign Up & Welcome Bonus",
    description:
      "Direct DM Play register portal. Complete your mobile signup in 6 steps with verified invite code 97569840601, claim welcome bonuses, and fix OTP errors fast",
    images: [`${siteConfig.url}/dmplay-most-popular-game-site-india.webp`],
  },
};

const faqs = [
  {
    q: "DM Play register karne ke liye kin documents ki zaroorat hoti hai?",
    a: "DM Play par register karne ke liye kisi physical document ya identity proof ki zaroorat nahi hoti. Aapko sirf ek active 10-digit Indian mobile number aur ek secure password set karna hota hai.",
  },
  {
    q: "Registration form par invitation code daalna zaroori hai kya?",
    a: "Haan, invitation code 97569840601 verify karna zaroori hai taaki aapka profile introductory welcome bonus, first deposit recharge rebate aur VIP commission rewards ke liye eligible ho sake.",
  },
  {
    q: "OTP phone par nahi aa raha hai, registration kaise complete karein?",
    a: "Pehle mobile cellular network signal check karein aur SMS spam folder verify karein. 60 seconds baad 'Resend OTP' tap karein ya device ko flight mode on-off karke dobara try karein.",
  },
  {
    q: "Kya ek hi mobile number se do account register ho sakte hain?",
    a: "Nahi, ek mobile number aur ek device IP se sirf ek hi account banaya ja sakta hai. Duplicate accounts banane par system automatically dono profiles ko freeze kar deta hai.",
  },
  {
    q: "Registration ke baad welcome deposit bonus kaise claim karein?",
    a: "Signup complete hone ke baad dashboard par 'Activity Center' me jayein. 'Welcome Rewards' tab me jakar apna promotional bonus manually claim karein.",
  },
  {
    q: "Kya DM Play registration ke liye koi fee lagti hai?",
    a: "Nahi, DM Play registration 100% free hai. Isme account create karne ke liye koi registration fee ya charge nahi lagta hai.",
  },
  {
    q: "Registration ke turant baad withdrawal lagaya ja sakta hai kya?",
    a: "Withdrawal lagane ke liye aapko pehle profile me apna bank account ya UPI ID bind karna hota hai aur game balance create karna hota hai. Withdrawal 3 se 5 minute me process hota hai.",
  },
  {
    q: "Agar registration page load na ho toh kya karein?",
    a: "Browser cache clear karein ya Chrome Incognito tab me dmplaylogin5.com/dm-play-register open karein. Slow Wi-Fi se direct cellular 4G/5G mobile data par switch karein.",
  },
];

export default function DmPlayRegisterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/dm-play-register#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/dm-play-register`,
        },
        headline: "DM Play Register: Fast Account Sign Up & New Player Guide",
        description:
          "Direct DM Play register portal. Complete your mobile signup in 6 steps with verified invite code 97569840601, claim welcome bonuses, and fix OTP errors fast",
        inLanguage: "en-IN",
        mainEntityOfPage: `${siteConfig.url}/dm-play-register`,
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
        "@id": `${siteConfig.url}/dm-play-register#breadcrumb`,
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
            name: "DM Play Register",
            item: `${siteConfig.url}/dm-play-register`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/dm-play-register#faq`,
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
              Already Member? Login &rarr;
            </Link>
            <a
              href={REGISTER_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Register Now
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
            <span className="font-semibold text-[#1E2637]">DM Play Register</span>
          </nav>

          {/* H1 Heading */}
          <div className="border-b border-[#F0E5E0] pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3 py-1 text-xs font-bold text-[#FF5A3D] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Sign Up Portal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              DM Play Register: Fast Account Sign Up &amp; New Player Guide
            </h1>
          </div>

          {/* Quick Answer Box */}
          <div className="mt-8 rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-br from-[#FFF5F3] via-white to-[#FFF0EC] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E2637] flex items-center gap-2 mb-3">
              <UserPlus className="h-5 w-5 text-[#FF5A3D]" />
              Quick Answer: Register in 45 Seconds
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base text-[#4A5568] font-medium">
              <li>Open the verified sign-up gateway at <strong className="font-mono text-[#1E2637]">dmplaylogin5.com/dm-play-register</strong></li>
              <li>Tap the direct <strong>Register Now</strong> button below to launch the secure phone sign-up form.</li>
              <li>Enter your mobile number, set your password, confirm invite code <strong className="font-mono text-[#FF5A3D]">97569840601</strong>, and submit.</li>
            </ol>
            <div className="mt-5">
              <a
                href={REGISTER_URL}
                target="_self"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-8 py-3.5 text-base font-extrabold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                START REGISTRATION NOW &rarr;
              </a>
            </div>
          </div>

          {/* Introduction */}
          <div className="mt-8 text-base text-[#5A6578] leading-relaxed">
            <p>
              Completing your <strong className="text-[#1E2637]">dm play register</strong> process takes less than a minute when accessing the genuine registration gateway. Thousands of Indian players look for <strong className="text-[#1E2637]">dmplay register</strong>, <strong className="text-[#1E2637]">dmplay registration</strong>, and active <strong className="text-[#1E2637]">dm play registration link</strong> pages to claim welcome deposit bonuses. This guide walks you through every verification step, explains bonus qualification, and prevents sign-up errors. If you already have an account, visit our <Link href="/dm-play-login" className="text-[#FF5A3D] underline font-semibold">/dm-play-login</Link> portal directly.
            </p>
          </div>

          {/* Sections Stack */}
          <div className="mt-12 space-y-12">
            {/* Step-by-Step Registration Section */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                DM Play registration in 6 steps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Follow these 6 steps to create your verified player account with 256-bit cryptographic security:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A5568]">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">1</span>
                  <p><strong className="text-[#1E2637]">Access the Sign-Up Form:</strong> Click the registration link at <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-[#F0E5E0]">dmplaylogin5.com</code> to open the official registration interface.</p>
                </div>

                {/* Uploaded Registration Screenshot Proof */}
                <div className="my-5 rounded-2xl border border-[#F0E5E0] bg-[#FFFDFC] p-4 flex flex-col items-center">
                  <div className="hero-phone relative shadow-md max-w-[240px]">
                    <Image
                      src="/register-screen-proof.webp"
                      alt="DM Play register your phone screen with phone number, password and invite code 97569840601 fields"
                      width={240}
                      height={480}
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-[18px]"
                    />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-[#1E2637] text-center">
                    Official DM Play registration screen with pre-filled invitation code 97569840601
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">2</span>
                  <p><strong className="text-[#1E2637]">Provide 10-Digit Mobile Number:</strong> Enter your active Indian telephone number without prefixing +91 or 0. This number binds your wallet balance and receives password recovery SMS tokens.</p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">3</span>
                  <p><strong className="text-[#1E2637]">Create Passphrase:</strong> Set a strong password (8–16 characters) combining lowercase letters, uppercase letters, and digits. Avoid common combinations like your birthdate.</p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">4</span>
                  <p><strong className="text-[#1E2637]">Confirm Password:</strong> Retype your password identically to eliminate typos before submission.</p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">5</span>
                  <p><strong className="text-[#1E2637]">Verify Invitation Code:</strong> Confirm the invite code box contains <code className="font-mono text-xs font-bold text-[#FF5A3D] bg-[#FFF2EE] px-1.5 py-0.5 rounded">97569840601</code>. Learn about commission benefits on our <Link href="/dm-play-invitation-code" className="text-[#FF5A3D] underline">/dm-play-invitation-code</Link> page.</p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">6</span>
                  <p><strong className="text-[#1E2637]">Agree &amp; Register:</strong> Check &quot;I have read and agree Privacy Agreement&quot; and tap the red &quot;Register&quot; button. Your profile activates immediately.</p>
                </div>
              </div>
            </section>

            {/* Real vs Fake Clone Registration Forms */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Real registration gateway vs fake clone forms
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Scammers frequently deploy clone forms to capture telephone numbers and initial recharges. Protect yourself by evaluating these technical security differences:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">Security Parameter</th>
                      <th className="p-3.5">Genuine DM Play Portal (dmplaylogin5.com)</th>
                      <th className="p-3.5">Phishing Clone Websites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Registration Cost</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">100% Free Signup (Zero Registration Fees)</td>
                      <td className="p-3.5 text-[#FB5B5B]">Demands upfront fee before account activation</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Required Details</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Mobile number + Password only</td>
                      <td className="p-3.5 text-[#FB5B5B]">Demands Aadhaar, PAN card, or ATM card PIN</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Invite Code Status</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Pre-applied verified code 97569840601</td>
                      <td className="p-3.5 text-[#FB5B5B]">Invalid or random expired strings</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Browser Architecture</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Direct web browser access, zero APK install</td>
                      <td className="p-3.5 text-[#FB5B5B]">Forces third-party APK file download</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Payout Verification</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Direct 3–5 min automated UPI settlement</td>
                      <td className="p-3.5 text-[#FB5B5B]">Locks wallet balance behind fake taxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 Registration Problems and Exact Fixes */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                6 registration problems and their exact fixes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                If you encounter a sign-up roadblock, identify the error and apply the immediate technical fix:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">#</th>
                      <th className="p-3.5">Registration Error</th>
                      <th className="p-3.5">Root Cause</th>
                      <th className="p-3.5">Immediate Action / Exact Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">1</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Phone Number Already Registered&quot;</td>
                      <td className="p-3.5">Account previously created with this mobile number</td>
                      <td className="p-3.5">Do not register again. Switch to <Link href="/dm-play-login" className="text-[#FF5A3D] underline">/dm-play-login</Link> or reset your password via SMS.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">2</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;SMS OTP Not Arriving&quot;</td>
                      <td className="p-3.5">Cellular network congestion or DND spam filter</td>
                      <td className="p-3.5">Check SMS spam folder. Wait 60s, toggle flight mode, and tap &quot;Resend OTP&quot;.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">3</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Invalid Invitation Code&quot;</td>
                      <td className="p-3.5">Typo in code or using expired promoter string</td>
                      <td className="p-3.5">Enter active code <code className="font-mono text-xs">97569840601</code> manually. Learn more on <Link href="/dm-play-invitation-code" className="text-[#FF5A3D] underline">/dm-play-invitation-code</Link>.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">4</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Password Too Weak or Mismatched&quot;</td>
                      <td className="p-3.5">Password less than 8 characters or fields differ</td>
                      <td className="p-3.5">Use 8–16 characters with at least one letter and one number. Confirm fields match.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">5</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Network Timeout / Anomaly&quot;</td>
                      <td className="p-3.5">DNS caching issue on public or mobile internet</td>
                      <td className="p-3.5">Switch from Wi-Fi to cellular 4G/5G data. Clear Chrome browser history and retry.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">6</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;IP Address Registration Limit Reached&quot;</td>
                      <td className="p-3.5">Another account created on the same Wi-Fi router</td>
                      <td className="p-3.5">Disconnect from shared Wi-Fi. Turn on mobile data and complete signup from your phone.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Post-Registration Checklist */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Post-registration checklist: First 5 minutes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                After your profile is created, execute these essential steps to secure your wallet and prepare for withdrawals:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#18B660]" />
                    1. Bind Bank / UPI Payout Method
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Link your IFSC code or UPI ID in Account Settings. Read our <Link href="/dm-play-withdrawal" className="text-[#FF5A3D] underline">/dm-play-withdrawal</Link> guide for payout details.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <Gift className="h-4 w-4 text-[#FF5A3D]" />
                    2. Claim Daily Activity Bonus
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Tap &quot;Activity Center&quot; on your lobby dashboard to claim your first check-in bonus and welcome recharge perks.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#54B0FD]" />
                    3. Explore Game Prediction Mechanics
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Review probability chart trends on our <Link href="/wingo-prediction-trick" className="text-[#FF5A3D] underline">/wingo-prediction-trick</Link> resource before placing your first order.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#18B660]" />
                    4. Join Official Community Desk
                  </h3>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    Join the <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-[#54B0FD] underline font-semibold">Official Telegram Community</a> for game schedule notices.
                  </p>
                </div>
              </div>
            </section>

            {/* Registration Security Rules */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Account safety rules for new players
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                Protect your newly registered gaming account by following these 5 rules:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#4A5568]">
                <li><strong className="text-[#1E2637]">Keep Passwords Confidential:</strong> Never share your login credentials or OTP with anyone claiming to be DM Play customer support.</li>
                <li><strong className="text-[#1E2637]">One Account Per Person:</strong> Do not create secondary profiles to bypass promotional limits; duplicate accounts will be suspended.</li>
                <li><strong className="text-[#1E2637]">Register on Direct Cellular Data:</strong> Avoid creating accounts over open public Wi-Fi networks in railway stations or cafes.</li>
                <li><strong className="text-[#1E2637]">Save Payout Credentials Accurately:</strong> Ensure your bank account name matches the holder identity to avoid settlement verification delays.</li>
                <li><strong className="text-[#1E2637]">Bookmark the Verified Gateway:</strong> Save <code className="font-mono text-xs">dmplaylogin5.com</code> to your mobile home screen to bypass deceptive copycat advertisements.</li>
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
