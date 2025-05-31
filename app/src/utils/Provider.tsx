import { ReactNode } from "react";
import { Providers } from "./RecoilProvider";
export default function Provider({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
