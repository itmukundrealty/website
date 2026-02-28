import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukund MGM Realty | Luxury and Affordable Projects in Mangalore",
  description: "Mangalore-based real estate developer offering luxury and affordable residential and commercial projects.",
  openGraph: {
    title: "Mukund MGM Realty | Real Estate Developer in Mangalore",
    description: "Discover premium residential and commercial projects by Mukund MGM Realty in Mangalore.",
    url: "https://mukundrealty.vercel.app/",
    siteName: "Mukund MGM Realty",
    images: [
      {
        url: "https://mukundrealty.vercel.app/og-images/home-og.png",
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
        className={`${hostGrotesk.variable} ${hostGrotesk.className} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
