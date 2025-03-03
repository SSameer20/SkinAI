import { IconType } from "react-icons/lib";

export interface ChallengeDataType {
  title: string;
  image: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Value {
  name: string;
  icon: IconType;
}
