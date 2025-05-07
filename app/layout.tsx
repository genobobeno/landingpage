import type { Metadata } from "next";
import { Ultra, Playfair_Display, Space_Grotesk } from "next/font/google";
import Script from 'next/script'; 
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '560141330466516');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=560141330466516&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="bg-off-white">{children}</body>
    </html>
  )
}
