import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FileText, } from "lucide-react";
import Link from 'next/link'
import {Button } from '@/components/ui/button'
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
  title: "Lexifile - Chat with Your Documents",
  description: "Transform any document into an intelligent conversation. Get instant insights from your PDFs, CSVs, Word docs, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      
          

        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
