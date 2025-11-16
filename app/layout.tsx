import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import Navbar from "@/components/sections/navbar/default";
import { FooterBottom } from "@/components/ui/footer";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "Web Design",
    "Delhi",
    "Digital Agency",
    "Website Development",
    "SEO Agency Delhi",
    "Graphic Design",
    "Mobile App Development",
  ],
  authors: [
    {
      name: "WebDesino",
      url: siteConfig.url,
    },
  ],
  creator: "WebDesino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@webdesino",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <Navbar/>
          {children}
          <FooterBottom/>
          </ThemeProvider>
      </body>
    </html>
  );
}
