import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Lexend_Deca } from 'next/font/google'
import Providers from './components/providers'
import { playfair_display } from './fonts';
import SiteHeader from '@/app/components/header/siteheader';
import ReCaptchaProvider from './components/recaptchaProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const monstserrat = Montserrat({ subsets: ['latin'] });
const lexend_deca = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Torreville Cabinetry',
  description: 'Luxury Cabibets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`dark ${playfair_display.variable}`}>
        <body className={`w-screen h-screen {lexend_deca.className}`}>
          <Providers>
            <SiteHeader className='z-20'></SiteHeader>
            {children}
            {/* <Script 
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            /> */}
          </Providers>
        </body>
      </html>
  )
}
