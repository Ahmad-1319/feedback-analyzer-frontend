import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FeedbackNexus | Feedback Intelligence",
  description:
    "Analyze customer feedback with high-precision AI models.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

import StoreProvider from "@/components/providers/StoreProvider";
import { LogoutModalWrapper } from "@/components/ui/logout-modal-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <StoreProvider>
          <LogoutModalWrapper />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3500,
              style: {
                background: "#ffffff",
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "var(--font-sans)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              },
              success: {
                iconTheme: {
                  primary: "#2563eb",
                  secondary: "#ffffff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#dc2626",
                  secondary: "#ffffff",
                },
              },
            }}
          />
        </StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
