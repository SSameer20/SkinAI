"use client";
import { AILogo, RecomendationLogo, ScoreLogo, UploadLogo } from "@/media/zip";
import GlassCard from "./GlassCard";
import { motion } from "motion/react";

type WorkSectionProps = {
  className?: string;
};

export default function WorkSection({ className }: WorkSectionProps) {
  return (
    <div
      className={` ${className} relative flex flex-col w-full min-h-screen justify-center items-center gap-20 px-4`}
    >
      <motion.p
        initial={{
          scale: 0.9,
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        className="text-4xl font-bold"
      >
        How It Works
      </motion.p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-[1200px]">
        <GlassCard
          title="Upload a Photo"
          description="Take a clear picture of your skin concern."
          icon={UploadLogo}
        />
        <GlassCard
          title="AI-Powered Analysis"
          description="Our advanced AI model instantly scans the image."
          icon={AILogo}
        />
        <GlassCard
          title="Severity Score"
          description="The AI categorizes the skin condition and provides a severity score."
          icon={ScoreLogo}
        />
        <GlassCard
          title="Recommendations"
          description="Receive actionable insights and guidance"
          icon={RecomendationLogo}
        />
      </div>
    </div>
  );
}
