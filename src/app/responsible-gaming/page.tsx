import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL } from "@/config/site";
import {
  ShieldAlert,
  AlertTriangle,
  Scale,
  Clock,
  Coins,
  HeartHandshake,
  ChevronRight,
  LifeBuoy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Gaming (18+) & Player Protection Policy | DM Play",
  description:
    "Our dedicated commitment to responsible digital gaming entertainment. 18+ age verification, financial risk mitigation, self-exclusion guidelines, and player support resources.",
  alternates: {
    canonical: `${siteConfig.url}/responsible-gaming`,
  },
  openGraph: {
    title: "Responsible Gaming (18+) & Player Protection Policy | DM Play",
    description:
      "Our dedicated commitment to responsible digital gaming entertainment. 18+ age verification, financial risk mitigation, self-exclusion guidelines, and player support resources.",
    url: `${siteConfig.url}/responsible-gaming`,
  },
};

export default function ResponsibleGamingPage() {
  const currentYear = new Date().getFullYear();

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
              Login
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
            <span className="font-semibold text-[#1E2637]">Responsible Gaming</span>
          </nav>

          {/* Page Title */}
          <div className="border-b border-[#F0E5E0] pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE7DF] bg-[#FFF2EE] px-3.5 py-1.5 text-xs font-bold text-[#FF5A3D] mb-4">
              <ShieldAlert className="h-3.5 w-3.5" />
              18+ Player Protection Policy
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E2637]">
              Responsible Gaming &amp; Player Welfare
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A6578] leading-relaxed">
              At DM Play and dmplaylogin5.com, we firmly believe that digital gaming entertainment must remain a fun, safe, and controlled recreational activity. We enforce a zero-tolerance policy towards underage participation and provide comprehensive self-regulation guidelines.
            </p>
          </div>

          {/* 18+ Age Restriction Highlight Box */}
          <div className="mt-8 rounded-3xl border-2 border-[#FF5A3D]/30 bg-gradient-to-r from-[#FFF5F1] to-[#FFEBE4] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF5A3D] text-white font-extrabold text-xl shadow-md">
                18+
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E2637]">Strict Legal Age Requirement</h2>
                <p className="mt-1.5 text-sm sm:text-base text-[#5A6578]">
                  You must be at least <strong className="text-[#1E2637]">18 years of age</strong> (or the legal age of majority in your jurisdiction) to register an account, participate in games, or access real-money features on DM Play. Underage participation is strictly prohibited by law.
                </p>
              </div>
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5A6578] leading-relaxed">
            {/* Financial Risk Notice */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF5EB] text-[#FEAA57]">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Understanding Financial Risk</h2>
              </div>
              <p>
                Online interactive games (including colour prediction, lotteries, and crash games) inherently involve elements of financial risk and chance. There is no guaranteed formula or outcome predictability. Please observe these fundamental financial discipline rules:
              </p>
              <ul className="mt-4 space-y-2.5 list-disc pl-5">
                <li><strong className="text-[#1E2637]">Recreational Budget Only:</strong> Only play with discretionary entertainment funds that you can comfortably afford to lose.</li>
                <li><strong className="text-[#1E2637]">Never Use Essential Funds:</strong> Never utilize funds allocated for rent, groceries, utility bills, education fees, or family savings.</li>
                <li><strong className="text-[#1E2637]">Do Not Chase Losses:</strong> Attempting to recover lost funds by placing larger wagers is the single most common cause of financial distress. Accept losses as entertainment cost.</li>
                <li><strong className="text-[#1E2637]">Not an Investment:</strong> Gaming platforms are recreational entertainment venues, never financial investment products or regular income avenues.</li>
              </ul>
            </section>

            {/* Self-Regulation Tools */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF8F1] text-[#18B660]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Self-Regulation &amp; Safety Controls</h2>
              </div>
              <p>
                Maintaining control over your gameplay habits is paramount. We recommend all players implement the following personal limits:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <Coins className="h-6 w-6 text-[#FF5A3D] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Deposit Limits</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Set a strict daily or weekly cap on how much you deposit into your player balance.</p>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <Clock className="h-6 w-6 text-[#54B0FD] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Time Limits</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Establish predetermined alarms. Never let gaming interfere with work or sleep.</p>
                </div>
                <div className="rounded-2xl border border-[#F2E8E4] bg-[#FFFDFC] p-4 text-center">
                  <LifeBuoy className="h-6 w-6 text-[#18B660] mx-auto mb-2" />
                  <h3 className="font-bold text-[#1E2637] text-sm">Self-Exclusion</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Request a cooling-off break or permanent account suspension via customer support.</p>
                </div>
              </div>
            </section>

            {/* Warning Signs Self-Assessment */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637] mb-3">Self-Assessment Checklist</h2>
              <p>Ask yourself these questions honestly to ensure your relationship with online gaming remains healthy:</p>
              <ul className="mt-4 space-y-2 text-sm text-[#5A6578]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Do you stay online longer than you originally planned?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Have you ever borrowed money or sold personal items to finance gaming?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Do you experience mood swings, anxiety, or stress after a losing session?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A3D] font-bold">&bull;</span>
                  <span>Have you lied to family members or close friends about the amount of time or money spent?</span>
                </li>
              </ul>
              <p className="mt-4 text-xs font-semibold text-[#FF5A3D]">
                If you answered &ldquo;Yes&rdquo; to any of these questions, we strongly encourage you to step away and seek assistance from independent counseling organizations.
              </p>
            </section>

            {/* Independent Support Contacts */}
            <section className="rounded-3xl border border-[#F0E5E0] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF6FF] text-[#54B0FD]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E2637]">Independent Help &amp; Hotlines</h2>
              </div>
              <p>
                Confidential, free professional advice is available worldwide for individuals and families impacted by gaming distress:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <h3 className="font-bold text-[#1E2637]">BeGambleAware</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Free, confidential support and treatment information.</p>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#54B0FD] hover:underline">
                    Visit begambleaware.org &rarr;
                  </a>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#F2E8E4]">
                  <h3 className="font-bold text-[#1E2637]">Gamblers Anonymous</h3>
                  <p className="mt-1 text-xs text-[#5A6578]">Fellowship of men and women sharing mutual experience to resolve shared issues.</p>
                  <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#54B0FD] hover:underline">
                    Visit gamblersanonymous.org &rarr;
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C2522] bg-[#111715] py-12 text-[#8E9794]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#1C2522] pb-8 text-xs">
            <Link href="/" className="inline-block transition-opacity hover:opacity-95">
              <Image
                src="/dmplay.webp"
                alt="DMPlay Logo"
                width={152}
                height={56}
                className="h-9 w-auto object-contain brightness-110"
              />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#8E9794]">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/responsible-gaming" className="hover:text-white transition-colors text-white">Responsible Gaming (18+)</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[#717A8A]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Strictly 18+ Responsible Entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
}
