import Link from "next/link";
import Image from "next/image";
import { siteConfig, LOGIN_URL, REGISTER_URL, TELEGRAM_URL } from "@/config/site";
import { ShieldCheck, ExternalLink, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="community" className="bg-[#0E1412] text-[#9BA3AF] pt-14 pb-12 border-t border-[#1C2522]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
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
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#8E9794] max-w-sm font-normal">
              DMPlay is an independent, informative promotional portal connecting players to modern online interactive entertainment, browser multiplayer matchmaking, and community tournaments.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#717A8A]">
              <ShieldCheck className="h-4 w-4 text-[#FF5A3D]" />
              <span>Promoting fair play &amp; responsible digital gaming entertainment.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/#why-choose" className="transition-colors hover:text-white">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="transition-colors hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#specs" className="transition-colors hover:text-white">
                  Comparison &amp; Specs
                </Link>
              </li>
              <li>
                <Link href="/#guide" className="transition-colors hover:text-white">
                  Player Guide
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Player Gateways */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Player Gateways
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
                <Link
                  href="/#specs"
                  className="transition-colors hover:text-white"
                >
                  System Requirements
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="transition-colors hover:text-white"
                >
                  Onboarding FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal (4 Screen Links Added Here) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Compliance &amp; Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About DM Play Portal
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="transition-colors hover:text-white flex items-center gap-1.5 text-[#FF8C67]">
                  <span className="rounded bg-[#FF5A3D]/20 px-1 py-0.5 text-[10px] font-bold text-[#FF5A3D]">18+</span>
                  Responsible Gaming
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
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-[#18B660]">
              <Shield className="h-3.5 w-3.5" />
              <span>SSL 256-Bit Secured Gateway</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-[#1C2522] pt-8">
          <p className="text-xs leading-relaxed text-[#717A8A]">
            <strong className="text-white font-bold">Disclaimer:</strong> This website is an informational promotional and SEO acquisition portal for the official DMPlay platform. It is not the gaming application itself. No login credentials or financial payments are collected on this domain. By clicking Login or Register, you are redirected to the official external portal ({LOGIN_URL}). Please verify that online entertainment conforms with your local municipal and national regulations.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7A75]">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
              <span className="hidden sm:inline">&bull;</span>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/responsible-gaming" className="hover:text-white transition-colors text-[#FF8C67]">18+ Protection</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <p className="text-[#6F7A75]">
              Powered by high-performance Next.js App Router &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
