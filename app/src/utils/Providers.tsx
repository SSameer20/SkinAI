"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function Providers({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
