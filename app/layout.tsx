import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coding4Kidz | Empowering the Next Generation Through Technology",
  description:
    "Coding4Kidz is a student-led nonprofit raising funds to bring computer education and digital skills to underserved communities worldwide — from the U.S. to Afghanistan.",
  keywords: [
    "coding nonprofit",
    "student led nonprofit",
    "computer education",
    "tech for kids",
    "Afghanistan computer center",
    "Jalalabad technology",
    "digital skills charity",
    "AYC Afghan Youth Connect",
    "Rotary partnership",
  ],
  openGraph: {
    title: "Coding4Kidz | Empowering the Next Generation Through Technology",
    description:
      "Student-led nonprofit bridging the digital divide — one computer lab at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
