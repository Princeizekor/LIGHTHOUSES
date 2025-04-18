import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  AnalyticsTracker,
  ErrorBoundaryClient,
  DOMInspector,
  Branding,
} from "@/utils/creatr.scripts";
import { GlobalErrorHandler } from "@/utils/global-error-handler";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Create a proper React component wrapper
const ErrorBoundaryWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const ErrorBoundaryComponent =
    ErrorBoundaryClient as unknown as React.ComponentType<any>;
  return <ErrorBoundaryComponent {...props} />;
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "LIGHTHOUSE",
    template: "%s | LIGHTHOUSE AUTO & CRYPTO",
  },
  description: "Premier marketplace for cars and cryptocurrencies",
  applicationName: "AutoCrypto Market",
  keywords: ["cars", "crypto", "marketplace", "buy", "sell", "trade", "vehicle", "cryptocurrency"],
  authors: [{ name: "AutoCrypto Market Team" }],
  creator: "AutoCrypto Market",
  publisher: "AutoCrypto Market",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LIGHTHOUSE AUTO & CRYPTO",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <GlobalErrorHandler />
        <DOMInspector>
          <ErrorBoundaryWrapper>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
            <Branding />
          </ErrorBoundaryWrapper>
          <AnalyticsTracker siteKey="auto-crypto-market" />
        </DOMInspector>
      </body>
    </html>
  );
}
