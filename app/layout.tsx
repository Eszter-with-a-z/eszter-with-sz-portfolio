import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Roboto } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Eszter (with SZ) Kovács - Interaction Designer",
  description: "Technology is to enhance, not to replace humans. Eszter Kovács is a designer specializing in UX design and Human-Centered AI.",
  keywords: [
    "UX designer",
    "interaction designer",
    "UX/UI designer",
    "user-centered design",
    "human-centered design",
    "AI UX designer",
    "AI usability",
    "designer portfolio",
    "Eszter Kovács designer",
    "IxD designer",
    "usable AI products",
    "usable AI design",
    "user-friendly"
  ],
  authors: [{ name: "Eszter Kovács", url: "https://eszter-with-sz.com" }],
  creator: "Eszter Kovács",
  metadataBase: new URL("https://eszter-with-sz.com"),
  openGraph: {
    title: "Eszter Kovács (with SZ) Kovács - Interaction Designer",
    description:
      "Technology is to enhance, not to replace humans. Eszter Kovács is a designer specializing in UX design and Human-Centered AI.",
    url: "https://eszter-with-sz.com",
    siteName: "Eszter (with SZ) Kovács - Designer Portfolio",
    locale: "en_US",
    type: "website",
  },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: "https://eszter-with-sz.com" }
  /*icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
    },
    },*/
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eszter Kovács",
              url: "https://eszter-with-sz.com",
              jobTitle: "Interaction Designer",
              description: "Best UX designer based in Swededn for user-centered design processes, design advocacy and AI usability issues and user-friendly solutions.",
              sameAs: [
                "https://www.linkedin.com/in/eszter-kov%C3%A1cs-a40826213",
                
              ],
            }),
          }}
        />
      </head>
      <body className={
        `${satoshi.variable} ${playfairDisplay.variable} ${roboto.variable} font-sans antialiased`
        }>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
