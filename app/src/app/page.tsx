import Navigation from "@/components/Navigation";
import { kaiseiOpti } from "./layout";
import { Hospital } from "lucide-react";

import WorkSection from "@/components/Works";
import HeroImage from "@/components/HeroImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-auto scrollbar-hide">
      <Navigation />
      <div
        className={`relative flex flex-col justify-start items-center min-h-[100vh] w-screen gap-10`}
      >
        <div className="flex gap-2 items-center justify-center py-2 px-4 border-2 rounded-2xl border-[#F7ED67] mt-[10vh]">
          <span className="lg:text-[12px]  text-[8px] flex gap-2 items-center justify-center text-[#F7ED67] ">
            <Hospital size={12} />
            Remote Health Care
          </span>
        </div>
        {/* <div className="absolute shadow-[5px_4px_200px_100px_rgba(77,117,237,0.25)] lg:top-[30vh] lg:right-[30vw]" />
        <div className="absolute shadow-[5px_4px_150px_100px_var(--color-woodsmoke-900)] lg:top-[60vh] lg:left-[25vw]" /> */}
        <div className="absolute top-[38px] right-0 shadow-[5px_4px_200px_100px_#4d75ed40] w-px h-px bg-[#d9d9d9] rounded-[0.05px]" />
        <div className="absolute top-[124px] left-[-20px] shadow-[5px_4px_200px_100px_#b9acac40] w-px h-px bg-[#d9d9d9] rounded-[0.05px]" />

        <h1
          className={`flex flex-col lg:text-[52px] md:text-[52px] sm:text-[32px] lg:w-1/2 w-3/4 text-center ${kaiseiOpti.className} font-bold `}
        >
          AI Powered Skin Health Advisor remotely
        </h1>
        <div className="flex gap-2 items-center justify-center py-2 px-4 border-2 rounded-xl border-none bg-[var(--color-shamrock-400)] hover:bg-[var(--color-shamrock-600)] cursor-pointer transition-all">
          <span className="text-[12px] flex gap-2 items-center justify-center text-[var(--color-woodsmoke-950)]">
            <Link href="/dashboard">Test Your Skin</Link>
          </span>
        </div>

        <HeroImage />
      </div>
      <WorkSection className="" />
      <footer className="w-full border-t mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 text-sm text-gray-500">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Skin.AI All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-gray-700 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-700 transition">
              Terms of Service
            </a>
            <a
              href="mailto:sameer.kattubadi@gmail.com"
              className="hover:text-gray-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
