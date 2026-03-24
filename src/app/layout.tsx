import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"], 
  variable: "--font-noto-sans-arabic",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Niger Petroleum Data Hub (NPDH)",
  description: "The official gateway to Niger's hydrocarbon exploration data",
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-primary overflow-x-hidden">
        <I18nProvider>
          <LayoutWrapper interVar={inter.variable} notoVar={notoArabic.variable}>
            {children}
          </LayoutWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
