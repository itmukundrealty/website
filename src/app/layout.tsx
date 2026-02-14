import type { Metadata } from "next";
import { Geist, Geist_Mono, Host_Grotesk, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukund MGM Realty | Luxury and Affordable Projects in Mangalore",
  description: "Mangalore-based real estate developer offering luxury and affordable residential and commercial projects.",
  openGraph: {
    title: "Mukund MGM Realty | Real Estate Developer in Mangalore",
    description: "Discover premium residential and commercial projects by Mukund MGM Realty in Mangalore.",
    url: "https://www.mukundmgmrealty.com/",
    siteName: "Mukund MGM Realty",
    images: [
      {
        url: "/og-images/home-og.png",
        width: 1200,
        height: 630,
        alt: "Mukund MGM Realty",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukund MGM Realty | Real Estate Developer in Mangalore",
    description: "Discover premium residential and commercial projects by Mukund MGM Realty in Mangalore.",
    images: ["/og-images/home-og.png"],
  },
  metadataBase: new URL("https://www.mukundmgmrealty.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.variable} ${playfairDisplay.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
