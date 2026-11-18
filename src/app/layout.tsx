import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FF5A3D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "DM Play",
    "DM Play Login",
    "Dmplaylogin",
    "Dmplaylogin5",
    "dmplaylogin5.com",
    "Best colour trading website",
    "Colour trading website",
    "Color trading game",
    "Free deposit",
    "Free deposit bonus",
    "Wingo colour trading",
    "Colour prediction game",
    "DM Play registration",
    "DM Play login link",
    "Fast 5-minute withdrawal UPI",
    "Wingo",
    "K3",
    "5D",
    "Aviator",
    "Slots",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "google1b1999a4a1bb3ef4",
  },
  icons: {
    icon: [
      { url: "/dmplay-icon.webp", type: "image/webp" },
      { url: "/icon.webp", type: "image/webp" },
    ],
    shortcut: "/dmplay-icon.webp",
    apple: "/dmplay-icon.webp",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 640,
        height: 640,
        alt: `${siteConfig.name} Official Main Icon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/dmplay-icon.webp`,
        },
        image: `${siteConfig.url}/dmplay-icon.webp`,
        sameAs: [siteConfig.links.telegram],
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#software`,
        },
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        datePublished: siteConfig.publishedDate,
        dateModified: siteConfig.lastUpdated,
        inLanguage: "en-US",
      },
      {
        "@type": "WebApplication",
        "@id": `${siteConfig.url}/#software`,
        name: "DM Play Gaming Web Platform",
        applicationCategory: "GameApplication",
        operatingSystem: "Web Browser, Android, iOS, Windows, macOS",
        browserRequirements: "Requires modern HTML5 and WebSocket-enabled browser (Chrome, Safari, Edge, Firefox)",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/#article`,
        headline: "DM Play Login - Best Colour Trading Website & Complete Player Guide",
        description: siteConfig.description,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        datePublished: siteConfig.publishedDate,
        dateModified: siteConfig.lastUpdated,
        mainEntityOfPage: `${siteConfig.url}/#webpage`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumbs`,
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
            item: `${siteConfig.url}/#login`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Best Colour Trading Guide",
            item: `${siteConfig.url}/#guide`,
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${siteConfig.url}/#howto`,
        name: "How to Access, Play and Withdraw on DM Play",
        description: "Official 6-step verified visual guide to register, play colour trading, deposit via UPI, and withdraw in 5 minutes on DM Play.",
        image: `${siteConfig.url}/step3-wingo.webp`,
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Register Phone & Apply Invitation Code",
            text: "Open the verified DM Play registration portal, enter your mobile number, set a secure passphrase, and verify invitation code 97569840601 is active.",
            image: `${siteConfig.url}/step1-register.webp`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Explore Member Lobby & Rewards",
            text: "Access the clean DM Play member dashboard to browse Lottery, Slots, and Sports categories, and access up to ₹2,000,000 in invitation rewards.",
            image: `${siteConfig.url}/step2-lobby.webp`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Play WinGo Colour Trading & Multiplier Predictions",
            text: "Select WinGo 30sec, 1Min, 3Min, or 5Min rounds to predict Green, Violet, Red, Big/Small, or specific number balls with up to 50x multipliers.",
            image: `${siteConfig.url}/step3-wingo.webp`,
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Instant Wallet Deposit via UPI-QR & Paytm",
            text: "Recharge your gaming balance using UPI-QR, Paytm, PhonePe, or USDT with zero processing fees starting from ₹100.",
            image: `${siteConfig.url}/step4-deposit.webp`,
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Submit 5-Minute Instant Withdrawal",
            text: "Choose Bank Card or UPI payout, enter your withdrawal amount between ₹110 and ₹20,000, and receive automated transfer in 3 to 5 minutes.",
            image: `${siteConfig.url}/step5-withdraw.webp`,
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Verify Completed Payout Settlement",
            text: "Track your completed ₹5,000.00 withdrawal proof in transaction history with unique Order ID WD20261113121622981104934c.",
            image: `${siteConfig.url}/step6-proof.webp`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFF7F4] text-[#1E2637] antialiased selection:bg-[#FF5A3D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
