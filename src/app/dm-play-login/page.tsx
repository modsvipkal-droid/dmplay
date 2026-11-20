import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "DM Play Login: Fast Portal Sign In & Problem Resolution",
  },
  description:
    "Direct DM Play login portal link. Complete your dmplay login in 3 steps, reset forgotten password, verify genuine domain, and fix stuck account errors fast",
  alternates: {
    canonical: `${siteConfig.url}/dm-play-login`,
  },
  openGraph: {
    title: "DM Play Login: Fast Portal Sign In & Problem Resolution",
    description:
      "Direct DM Play login portal link. Complete your dmplay login in 3 steps, reset forgotten password, verify genuine domain, and fix stuck account errors fast",
    url: `${siteConfig.url}/dm-play-login`,
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
    title: "DM Play Login: Fast Portal Sign In & Problem Resolution",
    description:
      "Direct DM Play login portal link. Complete your dmplay login in 3 steps, reset forgotten password, verify genuine domain, and fix stuck account errors fast",
    images: [`${siteConfig.url}/dmplay-most-popular-game-site-india.webp`],
  },
};

const faqs = [
  {
    q: "DM Play login link open kyu nahi ho raha hai?",
    a: "DM Play login link open na hone ka mukhya kaaran local ISP DNS cache ya slow internet hota hai. Browser cache clear karein, Wi-Fi se mobile network par switch karein, ya Incognito mode me `dmplaylogin5.com` khol kar login karein.",
  },
  {
    q: "Agar password bhul gaye toh login kaise karein?",
    a: 'Login screen par "Forgot Password" link par click karein. Apna 10-digit registered number daalein aur "Get OTP" tap karein. SMS me aaya 6-digit code enter karke naya password banayein aur turant account access karein.',
  },
  {
    q: "Kya ek phone me do DM Play account login kar sakte hain?",
    a: "Nahi, ek hi device ya IP address se do account chalana rules ke khilaf hai. Anti-fraud system multiple accounts ko block kar deta hai. Hamesha ek hi verified account use karein.",
  },
  {
    q: "Login karne ke baad balance zero dikh raha hai, kya karein?",
    a: "Pehle page ko refresh karein. Confirm karein ki aapne sahi registered phone number se login kiya hai. Agar balance fir bhi na dikhe toh transaction history check karein aur customer support se contact karein.",
  },
  {
    q: "OTP phone par nahi aa raha, login kaise complete karein?",
    a: 'Mobile network bars check karein aur SMS spam folder verify karein. 60 seconds baad "Resend OTP" tap karein ya phone ko flight mode on-off karke dobara try karein.',
  },
  {
    q: "DM Play customer care se direct baat kaise karein?",
    a: "Portal ke live support chat par jayein ya unke official Telegram community desk par ticket generate karein. Apni user ID aur problem screenshot share karke fast help paayein.",
  },
  {
    q: "Kya bina app download kiye browser me login safe hai?",
    a: "Haan, browser login 100% safe hai kyunki DM Play 256-bit TLS encryption use karta hai. Kisi unknown APK file ko install karne ki zaroorat nahi padti, jisse phone surakshit rehta hai.",
  },
  {
    q: "DM Play me login karne ke baad withdrawal kaise lagayein?",
    a: 'Dashboard par "Withdraw" option par tap karein. Apna verified bank account ya UPI ID chunein, withdrawal amount aur transaction pin enter karke submit karein. Payout 3 se 5 minute me transfer ho jaata hai.',
  },
];

export default function DmPlayLoginPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/dm-play-login#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/dm-play-login`,
        },
        headline: "DM Play Login: Fast Portal Access & Problem Resolution Guide",
        description:
          "Direct DM Play login portal link. Complete your dmplay login in 3 steps, reset forgotten password, verify genuine domain, and fix stuck account errors fast",
        inLanguage: "en-IN",
        mainEntityOfPage: `${siteConfig.url}/dm-play-login`,
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
        "@id": `${siteConfig.url}/dm-play-login#breadcrumb`,
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
            name: "DM Play Login",
            item: `${siteConfig.url}/dm-play-login`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/dm-play-login#faq`,
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
              href="/"
              className="text-xs sm:text-sm font-semibold text-[#5A6578] hover:text-[#FF5A3D] transition-colors px-2 py-1"
            >
              &larr; Home
            </Link>
            <a
              href={LOGIN_URL}
              target="_self"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Login Gateway
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
            <span className="font-semibold text-[#1E2637]">DM Play Login</span>
          </nav>

          {/* H1 Heading */}
          <div className="border-b border-[#F0E5E0] pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3 py-1 text-xs font-bold text-[#FF5A3D] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Sign In Portal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              DM Play Login: Fast Portal Access &amp; Problem Resolution Guide
            </h1>
          </div>

          {/* Quick Answer Box (Above the fold) */}
          <div className="mt-8 rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-br from-[#FFF5F3] via-white to-[#FFF0EC] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E2637] flex items-center gap-2 mb-3">
              <ShieldCheck className="h-5 w-5 text-[#FF5A3D]" />
              Quick Answer: Login in 30 Seconds
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base text-[#4A5568] font-medium">
              <li>Open the verified portal: <strong className="font-mono text-[#1E2637]">https://dmplaylogin5.com</strong></li>
              <li>Click the direct <strong>Login Gateway</strong> button below.</li>
              <li>Enter your registered 10-digit mobile number and password to access your dashboard.</li>
            </ol>
            <div className="mt-5">
              <a
                href={LOGIN_URL}
                target="_self"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-8 py-3.5 text-base font-extrabold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                LOGIN TO DM PLAY NOW &rarr;
              </a>
            </div>
          </div>

          {/* Introductory Body Text */}
          <div className="mt-8 text-base text-[#5A6578] leading-relaxed">
            <p>
              If you need the direct <strong className="text-[#1E2637]">dm play login</strong> portal, this guide gives you instant access without redirect loops. Many players searching for <strong className="text-[#1E2637]">dmplay login</strong>, <strong className="text-[#1E2637]">dmplaylogin</strong>, or an active <strong className="text-[#1E2637]">dm play login link</strong> end up on slow mirror pages or expired domains. Here you will find the verified sign-in path, technical checks to identify genuine platforms, and fast actionable fixes for every common <strong className="text-[#1E2637]">dm play login problem</strong>.
            </p>
          </div>

          {/* Sections Stack */}
          <div className="mt-12 space-y-12">
            {/* Section 1 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                DM Play login in 3 steps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                Accessing your player dashboard takes under 30 seconds through the verified web gateway. You do not need to install risky third-party APK files on your smartphone.
              </p>
              <div className="space-y-3 text-sm sm:text-base text-[#4A5568]">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">1</span>
                  <p><strong className="text-[#1E2637]">Open the Login Gateway:</strong> Tap the login button at <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-[#F0E5E0]">dmplaylogin5.com</code>. The browser opens the 256-bit TLS encrypted authentication page directly.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">2</span>
                  <p><strong className="text-[#1E2637]">Enter Credentials:</strong> Type your registered 10-digit Indian mobile number. Enter your password in the password field. Passwords are case-sensitive.</p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9F7] border border-[#F2E8E4]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A3D] text-xs font-bold text-white">3</span>
                  <p><strong className="text-[#1E2637]">Confirm and Enter:</strong> Tap the red &quot;Log In&quot; button. Your profile, real-time balance, and game categories load immediately.</p>
                </div>
              </div>

              {/* Image Placeholder: login screen */}
              <div className="my-6 rounded-2xl border border-dashed border-[#F0E5E0] bg-[#FFFDFC] p-6 text-center">
                <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
                  <Image
                    src="/Dmplay-login-successful.webp"
                    alt="DM Play login screen verified portal access"
                    width={320}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                    className="rounded-xl shadow-sm object-cover max-w-full"
                  />
                  <p className="mt-2 text-xs text-[#A48C82]">[IMAGE: login screen] — Verified DM Play secure login interface</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6578] italic bg-[#FFF9F7] p-4 rounded-xl border border-[#F0E5E0]">
                <strong>Pro-Tip:</strong> On your personal phone, keep browser cookies active to stay signed in between sessions without retyping credentials. Avoid saving login details on shared devices.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                New user? Register first (6 steps)
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-5">
                You cannot complete a <strong className="text-[#1E2637]">dm play login</strong> without creating an active player profile first. If you are new, finish your initial registration before signing in:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A5568]">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">1.</span>
                  <div>
                    <strong className="text-[#1E2637]">Open Sign-Up Screen:</strong> Tap the registration option on the portal navigation bar to open the registration form.
                  </div>
                </div>

                {/* Uploaded Registration Screenshot */}
                <div className="my-4 rounded-2xl border border-[#F0E5E0] bg-[#FFFDFC] p-4 flex flex-col items-center">
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

                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">2.</span>
                  <p><strong className="text-[#1E2637]">Input Active Mobile Number:</strong> Enter your genuine 10-digit phone number. Ensure this SIM card is active to receive OTPs and withdrawal alerts.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">3.</span>
                  <p><strong className="text-[#1E2637]">Create Strong Password:</strong> Choose a secure password between 8 and 16 characters mixing letters and numerals. Avoid simple sequences like 123456.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">4.</span>
                  <p><strong className="text-[#1E2637]">Confirm Your Password:</strong> Re-enter the exact password in the confirmation field to avoid typing mistakes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">5.</span>
                  <p><strong className="text-[#1E2637]">Verify Invitation Code:</strong> Ensure the invite code field displays <code className="font-mono text-xs font-bold text-[#FF5A3D] bg-[#FFF2EE] px-1.5 py-0.5 rounded">97569840601</code>. This code qualifies your profile for welcome deposit perks. Review full terms on <Link href="/dm-play-register" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">/dm-play-register</Link> and check <Link href="/dm-play-invitation-code" className="text-[#FF5A3D] underline underline-offset-2 hover:text-[#FF8C67]">/dm-play-invitation-code</Link> for bonus eligibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#FF5A3D]">6.</span>
                  <p><strong className="text-[#1E2637]">Accept Terms and Submit:</strong> Tick &quot;I have read and agree Privacy Agreement&quot; and tap &quot;Register&quot;. Your account activates instantly.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Real domain vs fake clone — how to verify
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                The biggest risk in online colour prediction is entering credentials on fake clone websites. Fraudsters mimic the visual interface to harvest credentials. Check these technical signals before logging in:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">Security Parameter</th>
                      <th className="p-3.5">Genuine DM Play Gateway (dmplaylogin5.com)</th>
                      <th className="p-3.5">Fake / Clone Phishing Sites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Domain URL</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Verified apex domain with clean HTTPS</td>
                      <td className="p-3.5 text-[#FB5B5B]">Random subdomains or misspelled names</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">SSL Certificate</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Valid 256-bit TLS padlock</td>
                      <td className="p-3.5 text-[#FB5B5B]">&quot;Not Secure&quot; browser warning</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Pop-Up Ads</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Zero third-party ad banners</td>
                      <td className="p-3.5 text-[#FB5B5B]">Aggressive spam pop-ups and fake alerts</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Download Prompts</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">100% web browser based</td>
                      <td className="p-3.5 text-[#FB5B5B]">Forces automatic APK downloads</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Payment Gateway</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Encrypted dynamic UPI-QR channels</td>
                      <td className="p-3.5 text-[#FB5B5B]">Personal UPI handles or WhatsApp chat payments</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold text-[#1E2637]">Session Security</td>
                      <td className="p-3.5 text-[#18B660] font-semibold">Auto-logout on suspicious IP shifts</td>
                      <td className="p-3.5 text-[#FB5B5B]">Unencrypted plain-text logins</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#5A6578]">
                <strong>How to protect yourself:</strong> Bookmark <code className="font-mono text-xs bg-[#FFF9F7] px-1 py-0.5 rounded border border-[#F0E5E0]">dmplaylogin5.com</code> in your browser. Never click random sign-in links shared inside unverified groups or social comments.
              </p>
            </section>

            {/* Section 4 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Forgot password? Reset in 4 steps
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                If you face a <strong className="text-[#1E2637]">dmplay forgot password</strong> lock, your funds remain secure on the server. Follow this 4-step recovery process to regain access:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-[#4A5568]">
                <li><strong className="text-[#1E2637]">Tap Forgot Password:</strong> On the login screen, tap &quot;Forgot Password&quot; below the submit button.</li>
                <li><strong className="text-[#1E2637]">Submit Registered Phone:</strong> Enter your 10-digit mobile number and confirm cellular network signal.</li>
                <li><strong className="text-[#1E2637]">Enter OTP Code:</strong> Tap &quot;Get OTP&quot;. Enter the 6-digit verification code received via SMS within 120 seconds.</li>
                <li><strong className="text-[#1E2637]">Set New Password:</strong> Enter a fresh password, confirm it, and tap &quot;Submit&quot;. Return to the login tab to sign in.</li>
              </ol>

              {/* Image Placeholder: forgot password screen */}
              <div className="my-6 rounded-2xl border border-dashed border-[#F0E5E0] bg-[#FFFDFC] p-6 text-center">
                <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF2EE] text-[#FF5A3D] mb-2">
                    <Lock className="h-8 w-8" />
                  </div>
                  <p className="text-xs text-[#A48C82]">[IMAGE: forgot password screen] — SMS verification and password reset interface</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F7] border border-[#F0E5E0] text-xs sm:text-sm text-[#5A6578]">
                <strong className="text-[#1E2637]">Action if OTP does not arrive:</strong> Check your mobile network bars and DND spam folders. If it does not arrive within 2 minutes, wait 60 seconds and request a fresh OTP or switch to mobile data.
              </div>
            </section>

            {/* Section 5 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                6 login problems and their exact fixes
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                When facing a <strong className="text-[#1E2637]">dm play login problem</strong>, use this troubleshooting table to apply the immediate fix:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#F0E5E0]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FFF4F0] border-b border-[#F0E5E0] font-bold text-[#1E2637]">
                      <th className="p-3.5">#</th>
                      <th className="p-3.5">Login Problem / Error Message</th>
                      <th className="p-3.5">Root Cause</th>
                      <th className="p-3.5">Immediate Action / Exact Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4] text-[#5A6578]">
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">1</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Account does not exist&quot;</td>
                      <td className="p-3.5">Typo in phone number or unregistered account</td>
                      <td className="p-3.5">Verify your 10-digit number. If new, finish registration on <Link href="/dm-play-register" className="text-[#FF5A3D] underline">/dm-play-register</Link>.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">2</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Password Error / Invalid Credentials&quot;</td>
                      <td className="p-3.5">Case-sensitivity typo or Caps Lock enabled</td>
                      <td className="p-3.5">Retype carefully in notepad first. If forgotten, use the &quot;Forgot Password&quot; flow.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">3</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Network Anomaly / Request Timeout&quot;</td>
                      <td className="p-3.5">Local ISP DNS glitch or unstable internet</td>
                      <td className="p-3.5">Switch from Wi-Fi to cellular data. Clear Chrome browser cache or use Incognito.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">4</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Verification Code / Captcha Expired&quot;</td>
                      <td className="p-3.5">Latency delay exceeded captcha validity</td>
                      <td className="p-3.5">Tap captcha image to refresh new digits, type them, and submit within 15 seconds.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">5</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">White Blank Screen / Spinner Stuck</td>
                      <td className="p-3.5">Corrupted browser cache or script conflict</td>
                      <td className="p-3.5">Go to Chrome Settings &gt; Privacy &gt; Clear Browsing Data. Reload <code className="font-mono text-xs">dmplaylogin5.com</code>.</td>
                    </tr>
                    <tr className="hover:bg-[#FFF9F7]">
                      <td className="p-3.5 font-bold">6</td>
                      <td className="p-3.5 font-bold text-[#1E2637]">&quot;Account logged in on another device&quot;</td>
                      <td className="p-3.5">Active session running elsewhere</td>
                      <td className="p-3.5">Close existing browser tabs or restart device. The server clears sessions in 3 minutes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#5A6578]">
                Temporary login issues never affect your funds. Once logged in, visit <Link href="/dm-play-withdrawal" className="text-[#FF5A3D] underline font-semibold">/dm-play-withdrawal</Link> to review your balance and records.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Account blocked or suspended — what to do
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                A <strong className="text-[#1E2637]">dm play account blocked</strong> notice occurs when automated risk detection triggers a security freeze.
              </p>
              <div className="rounded-2xl bg-[#FFF9F7] p-5 border border-[#F0E5E0] space-y-2 text-xs sm:text-sm text-[#4A5568] mb-6">
                <p><strong className="text-[#1E2637]">&bull; Multiple Accounts on One Device:</strong> Creating multiple accounts from one phone or IP to claim bonuses violates terms.</p>
                <p><strong className="text-[#1E2637]">&bull; VPN or Proxy Usage:</strong> Virtual private networks mask location and trigger security flags.</p>
                <p><strong className="text-[#1E2637]">&bull; Repeated Wrong Passwords:</strong> 5 consecutive failed attempts lock sign-in for 30 minutes to stop brute-force attacks.</p>
                <p><strong className="text-[#1E2637]">&bull; Disputed Transactions:</strong> Failed UPI payments marked as chargebacks trigger automated account review.</p>
              </div>

              <h3 className="text-lg font-bold text-[#1E2637] mb-3">Immediate Action Checklist to Unblock Your Account:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-[#4A5568]">
                <li><strong className="text-[#1E2637]">Do Not Create Duplicate Accounts:</strong> Opening another account causes a permanent blacklist of your phone and bank details.</li>
                <li><strong className="text-[#1E2637]">Gather Account Proofs:</strong> Note your registered phone number, player UID, balance, and latest recharge screenshot.</li>
                <li><strong className="text-[#1E2637]">Contact Support:</strong> Reach out directly through the official Telegram desk at <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer nofollow" className="text-[#54B0FD] font-bold underline inline-flex items-center gap-1">DM Play Official Telegram Community <ExternalLink className="h-3 w-3" /></a>.</li>
                <li><strong className="text-[#1E2637]">Request Verification:</strong> Send your details: <em>&ldquo;My account [Phone Number] is blocked. Please verify my details and restore access.&rdquo;</em> Agents resolve genuine cases quickly.</li>
              </ol>
            </section>

            {/* Section 7 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Login security rules
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-4">
                Protect your player account and balance by following these 5 mandatory rules:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#4A5568]">
                <li><strong className="text-[#1E2637]">Never Disclose Passwords or OTPs:</strong> Official staff will never ask for your password or SMS codes via call or WhatsApp.</li>
                <li><strong className="text-[#1E2637]">Avoid Auto-Saving on Shared Devices:</strong> When using public computers or shared phones, use Incognito and log out after playing.</li>
                <li><strong className="text-[#1E2637]">Disable VPNs:</strong> Access <code className="font-mono text-xs">dmplaylogin5.com</code> using direct Indian cellular connections to avoid automatic security blocks.</li>
                <li><strong className="text-[#1E2637]">Beware of Fake Prediction Hacks:</strong> Never install unofficial mod APKs promising guaranteed outcomes; learn genuine methods on our <Link href="/wingo-prediction-trick" className="text-[#FF5A3D] underline font-semibold">/wingo-prediction-trick</Link> guide.</li>
                <li><strong className="text-[#1E2637]">Rotate Passwords Periodically:</strong> Update your login credentials every 30 days from account settings to maintain maximum safety.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2637] mb-4">
                Bookmark the correct link
              </h2>
              <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed mb-6">
                Searching for <strong className="text-[#1E2637]">dm play login link</strong> on search engines exposes you to clone ads and expired redirects. Save the portal directly on your mobile device:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-2 flex items-center gap-1.5">
                    <Smartphone className="h-4 w-4 text-[#FF5A3D]" />
                    Android Shortcut (Chrome):
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-[#5A6578]">
                    <li>Open <code className="font-mono">https://dmplaylogin5.com</code> in Google Chrome.</li>
                    <li>Tap the three dots menu in the top-right corner.</li>
                    <li>Tap <strong>&quot;Add to Home screen&quot;</strong>.</li>
                    <li>Label it &quot;DM Play Login&quot; and tap <strong>Add</strong>.</li>
                  </ol>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F0E5E0]">
                  <h3 className="font-bold text-[#1E2637] text-sm mb-2 flex items-center gap-1.5">
                    <Bookmark className="h-4 w-4 text-[#54B0FD]" />
                    iOS Shortcut (Safari):
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-[#5A6578]">
                    <li>Open <code className="font-mono">https://dmplaylogin5.com</code> in Safari.</li>
                    <li>Tap the Share button at the bottom.</li>
                    <li>Tap <strong>&quot;Add to Home Screen&quot;</strong>.</li>
                    <li>Tap <strong>Add</strong> in the top-right corner for instant app-like access.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 9: FAQ */}
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

            {/* Section 10: Disclaimer */}
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
