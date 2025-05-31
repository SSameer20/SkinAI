import { User } from "../utils/types";
import { atom } from "recoil";

export const UserAtom = atom<User | null>({
  key: "UserAtom",
  default: null,
});

export const ImageResponse = atom({
  key: "ImageResponse",
  default: { response: null },
});
