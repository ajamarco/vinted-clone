import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { CategoryBar } from "@/components/layout/CategoryBar";
import { Navbar } from "@/components/layout/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clearout — Circular Fashion Marketplace",
  description: "Buy and sell pre-loved fashion in the UK.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <CategoryBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
