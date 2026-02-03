import type React from "react"
import type { Metadata } from "next"
import { Libre_Caslon_Text, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Memorial Design Platform | 3D Gravestone & Headstone Visualisation for Funeral Homes",
  description:
    "Professional memorial design software for funeral directors. Create custom gravestones, headstones, and tombstones with photorealistic 3D visualisation. Reduce design revisions by 75% and increase sales by 30%.",
  keywords: [
    "memorial design",
    "gravestone design",
    "headstone visualisation",
    "3D tombstone",
    "funeral home software",
    "monument design platform",
    "memorial visualisation",
  ],
  openGraph: {
    title: "Memorial Design Platform | 3D Gravestone Visualisation",
    description:
      "Transform your memorial design process with photorealistic 3D visualisation for funeral homes and monument companies.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_libreCaslon.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
