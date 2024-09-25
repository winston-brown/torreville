"use client"
import { NextUIProvider } from "@nextui-org/react";
import ReCaptchaProvider from "./recaptchaProvider";


export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
