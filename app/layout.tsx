import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { Header } from "@/components/layout/Header";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Wontid — Circular Fashion Marketplace",
  description: "Buy and sell pre-loved fashion in the UK.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
