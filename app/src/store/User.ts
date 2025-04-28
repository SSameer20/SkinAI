import { atom } from "recoil";

export const UserAtom = atom({
  key: "UserAtom",
  default: { user: null },
});

export const ImageResponse = atom({
  key: "ImageResponse",
  default: { response: null },
});
