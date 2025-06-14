"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "SkinAI – Your AI-Powered Dermatology Assistant",
//   description:
//     "SkinAI helps you analyze skin issues from images using AI and get insights instantly. Designed for people in remote areas with limited access to skin specialists.",
//   keywords: [
//     "AI Dermatology",
//     "Skin Analysis",
//     "AI Skin Assistant",
//     "Remote Skin Diagnosis",
//     "Skin Disease Detection",
//     "SkinAI",
//   ],
//   authors: [{ name: "Sameer Shaik", url: "https://github.com/SSameer20" }],
//   category: "Health & Technology",
//   icons: {
//     icon: "/logo.jpg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.jpg" type="image/x-icon" />
      </head>
      <RecoilRoot>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-x-hidden`}
        >
          <div>{children}</div>
        </body>
      </RecoilRoot>
    </html>
  );
}
