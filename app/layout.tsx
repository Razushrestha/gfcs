import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GFCS - Expert Accounting, Tax & Advisory Solutions in Nepal",
  description: "Trusted by enterprises, SMEs, and institutions across Nepal for compliant, reliable, and strategic financial advisory services. Professional accounting, audit, tax, and corporate advisory.",
  keywords: ["Corporate Tax Advisory Nepal", "Audit & Assurance Services Nepal", "Accounting & Compliance Nepal", "Business Advisory Nepal", "Corporate Services Nepal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
