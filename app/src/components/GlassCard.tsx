"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  className?: string;
  icon: string | StaticImport;
  title: string;
  description: string;
};

export default function GlassCard({
  className,
  title,
  description,
  icon,
}: Props) {
  return (
    <motion.div
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
        duration: 0.3,
        delay: 0.4,
      }}
      className={`${className} min-h-[250px] rounded-xl shadow-md flex flex-col items-center justify-around text-xl font-semibold`}
    >
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="object-contain"
      />
      <div className="flex flex-col w-full items-center">
        <h1 className="font-bold">{title}</h1>
        <p className="font-light sm:text-center md:w-2/3 sm:w-1/3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
