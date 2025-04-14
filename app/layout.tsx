import type { Metadata } from "next";
import { Ultra, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const ultra = Ultra({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-heading',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-subheading',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "PhD2Pro",
  description: "Master the transition from academia to industry with our proven framework",
  icons: {
    icon: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/idevibelogo.png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ultra.variable} ${playfair.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-off-white">{children}</body>
    </html>
  )
}
