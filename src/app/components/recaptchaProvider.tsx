"use client"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Script from "next/script";

export default function ReCaptchaProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEX_PUBLIC_RECAPTCHA_SITE_KEY as string}
            scriptProps={{ async: true, defer: true, appendTo: 'body' }}
        >
            <Script 
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />
            {children}
        </GoogleReCaptchaProvider>

    )
}
