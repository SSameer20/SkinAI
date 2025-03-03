import { Types } from "mongoose";

export interface LogInterface {
  info: (message: string) => void;
  error: (message: string) => void;
}

export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  mobile: string;
  profileImage?: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}
export type Role = "admin" | "user";

export interface JwtPayloadType {
  id: Types.ObjectId;
  email: string;
  role: Role;
}
