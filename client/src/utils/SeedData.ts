import { ChallengeDataType } from "./types";
import awareness from "../media/awareness.png";
import stigma from "../media/stigma.png";
import accessibility from "../media/accessibility.png";
import treatment from "../media/conversation.png";

export const SeedChallenges: ChallengeDataType[] = [
  {
    title: "Lack of Accessibility",
    image: accessibility,
    description:
      "Millions in remote areas lack access to dermatologists and skin care facilities.",
  },
  {
    title: "Late Diagnosis of Skin Conditions",
    image: treatment,
    description:
      "Skin cancer and other conditions often go undetected until it's too late.",
  },
  {
    title: "Stigma Around Skin Issues",
    image: stigma,
    description:
      "Social stigma often prevents people from seeking timely treatment.",
  },
  {
    title: "Limited Awareness",
    image: awareness,
    description:
      "People in underserved areas are unaware of preventive skin care and treatments.",
  },
];
