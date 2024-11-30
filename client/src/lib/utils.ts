import { clsx, type ClassValue } from "clsx";
// import { div, span } from "framer-motion/client";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
