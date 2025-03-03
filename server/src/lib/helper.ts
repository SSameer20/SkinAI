import { LogInterface } from "./types";

export const log: LogInterface = {
  info: (message: string) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message: string) => {
    console.log(`[ERROR] ${message}`);
  },
};
