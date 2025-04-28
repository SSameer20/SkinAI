"use client";
import Image from "next/image";
import { Dashboard } from "@/media/zip";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { useRef } from "react";

export default function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [0, 10]);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });
  return (
    <div
      ref={containerRef}
      className="w-full h-2/3 [perspective:800px] [transform-style:preserve-3d] flex justify-center"
    >
      <motion.div
        transition={{
          duration: 0.4,
        }}
        className="bg-neutral-100 h-full w-3/4 rounded-[16px] p-2"
        style={{
          rotateX: rotateX,
          // translateZ: "50px",
        }}
      >
        <div className="bg-black h-full w-full rounded-[12px]"></div>
        <Image
          src={Dashboard}
          alt="dashboard"
          className="h-full w-full rounded-[12px]"
          height={1024}
          width={1024}
        />
      </motion.div>
    </div>
  );
}
