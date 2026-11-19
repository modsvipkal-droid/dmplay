/**
 * Centralized Site Configuration
 * 
 * All external landing, login, and registration links are defined here.
 * NEVER hardcode these URLs in components.
 */

export const LOGIN_URL = "https://www.dmplay20.com/#/register?invitationCode=97569840601";
export const REGISTER_URL = "https://www.dmplay20.com/#/register?invitationCode=97569840601";
export const TELEGRAM_URL = "https://t.me/+D80H_HPuQeQ4NTFl";

export const siteConfig = {
  name: "DM Play",
  legalName: "DM Play Gaming Portal",
  domain: "dmplaylogin5.com",
  url: "https://dmplaylogin5.com",
  ogImage: "https://dmplaylogin5.com/dmplay-icon.webp",
  title: "DM Play Game: Live 3 Min Withdrawal Proof & Easy Play",
  description:
    "DM Play par pending withdrawal ka issue ab turant solve. Code 97569840601 lagakar easy trading shuru karein aur 3 minute me apna balance Fix Karo",
  links: {
    login: LOGIN_URL,
    register: REGISTER_URL,
    telegram: TELEGRAM_URL,
  },
  mainNav: [
    { title: "Why Choose Us", href: "#why-choose" },
    { title: "How It Works", href: "#how-it-works" },
    { title: "Comparison & Specs", href: "#specs" },
    { title: "Player Guide", href: "#guide" },
    { title: "FAQ", href: "#faq" },
  ],
  invitationCode: "97569840601",
  lastUpdated: "2026-11-15T00:00:00Z",
  publishedDate: "2026-01-15T00:00:00Z",
} as const;

export type SiteConfig = typeof siteConfig;
