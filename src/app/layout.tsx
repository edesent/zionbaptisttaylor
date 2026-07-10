import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zionbaptistchurchtaylor.com"),
  title: {
    default: "Zion Baptist Church — Reformed Baptist Church in Taylor, MI",
    template: "%s | Zion Baptist Church",
  },
  description:
    "A Christ-centered, Word-driven Reformed (Particular) Baptist church in Taylor, Michigan. Join Pastor Michael R. Jones for Sunday worship at 11 AM, Sunday School at 10 AM, and Wednesday Bible study at 6:30 PM. Expository preaching — all are welcome.",
  keywords: [
    "Zion Baptist Church",
    "Reformed Baptist church Taylor MI",
    "Particular Baptist church Michigan",
    "Baptist church Taylor Michigan",
    "expository preaching Detroit",
    "Pastor Michael Jones Taylor MI",
    "church near me Taylor Michigan",
    "Sunday worship Taylor MI",
    "1689 confession church Michigan",
    "Bible believing church Downriver Detroit",
  ],
  authors: [{ name: "Zion Baptist Church" }],
  creator: "Zion Baptist Church",
  publisher: "Zion Baptist Church",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zion Baptist Church — Taylor, MI",
    description:
      "A Christ-centered, Word-driven Reformed Baptist church in Taylor, Michigan. Join us for Sunday worship and Wednesday Bible study. Pastor Michael R. Jones preaches verse by verse — all are welcome.",
    url: "https://www.zionbaptistchurchtaylor.com",
    type: "website",
    locale: "en_US",
    siteName: "Zion Baptist Church",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion Baptist Church in Taylor, Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Baptist Church — Taylor, MI",
    description:
      "A Christ-centered, Word-driven Reformed Baptist church in Taylor, Michigan. All are welcome.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Zion Baptist Church",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  category: "religion",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1726" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
