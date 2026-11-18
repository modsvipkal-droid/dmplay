import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="community" className="bg-[#0B100E] text-[#9BA3AF] pt-12 pb-10 border-t border-[#1C2522]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand Information */}
        <div className="max-w-2xl mb-8">
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-95"
            aria-label="DMPlay Home"
          >
            <Image
              src="/dmplay.webp"
              alt="DMPlay Logo"
              width={152}
              height={56}
              className="h-10 w-auto object-contain brightness-110"
            />
          </Link>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#8E9794] font-normal">
            DMPlay is an independent, informative promotional portal connecting players to modern online interactive entertainment, browser multiplayer matchmaking, and community tournaments.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#717A8A]">
            <ShieldCheck className="h-4 w-4 text-[#FF5A3D]" />
            <span>SSL 256-Bit Secured Gateway &bull; Promoting Fair Play</span>
          </div>
        </div>

        {/* 2-Column Clean Grid Layout */}
        <div className="grid grid-cols-2 gap-6 sm:gap-14 border-t border-[#1C2522] pt-8">
          {/* Column 1: PLATFORM & LEGAL (4 New Pages) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform &amp; Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About DM Play Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="inline-flex items-center gap-1.5 text-[#FF8C67] hover:text-white transition-colors"
                >
                  <span className="rounded bg-[#FF5A3D]/20 px-1 py-0.5 text-[10px] font-bold text-[#FF5A3D]">
                    18+
                  </span>
                  <span>Responsible Gaming</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: SUPPORT & GATEWAYS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Support &amp; Gateways
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={REGISTER_URL}
                  target="_self"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-flex items-center gap-1.5 font-bold text-[#FF6E54] hover:text-white transition-colors"
                >
                  <span>New Player Registration</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  target="_self"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <span>Account Sign In</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#29B6F6] hover:text-white transition-colors"
                >
                  <span>Telegram Community</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/#faq" className="transition-colors hover:text-white">
                  Onboarding FAQ
                </Link>
              </li>
              <li>
                <Link href="/#specs" className="transition-colors hover:text-white">
                  System Requirements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 border-t border-[#1C2522] pt-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 mb-4 text-xs leading-relaxed text-[#8E9794]">
            <strong className="text-white font-bold">Independent Technical Contractor Notice:</strong> This website is developed and maintained by an independent technical web developer and SEO contractor engaged strictly for search engine indexing and technical performance optimization. Neither the developers nor webmasters operate, own, promote, or endorse any online game, betting, or real-money gaming activities. No login credentials or financial payments are collected on this domain. By clicking Login or Register, you are redirected to the external operator portal ({LOGIN_URL}). Please verify that online entertainment conforms with your local municipal and national regulations.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7A75]">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
              <span className="hidden sm:inline">&bull;</span>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/responsible-gaming" className="hover:text-white transition-colors text-[#FF8C67]">18+ Protection</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <p className="text-[#6F7A75]">
              Strictly 18+ &bull; Independent Technical SEO Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
