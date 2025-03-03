import { ChallengeDataType, TeamMember, Value } from "./types";
import awareness from "../media/awareness.png";
import stigma from "../media/stigma.png";
import accessibility from "../media/accessibility.png";
import treatment from "../media/conversation.png";
import { TbWashDryclean } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";

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

export const teamMembers: TeamMember[] = [
  {
    name: "Sameer",
    role: "Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE9vcBW4PGadQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722757234149?e=1741824000&v=beta&t=p0AQTnXH9n2kMdBxvU5dgFakhGt45OKAzoy-EY6NJYw",
  },
  {
    name: "Pranay",
    role: "ML Engineer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEuBKAHh4RqyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1733071306433?e=1741824000&v=beta&t=dp5fD8ZQVbIBS-1HKSP1JDJBTW_gLCLCwipjESAHVY0",
  },
  {
    name: "Muskan",
    role: "UI/UX",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFyjH4Zi7IN-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712592800846?e=1741824000&v=beta&t=WWfMgdna-cT5ydTliZhLV6USPShhZucQLxVVFdLp-ZI",
  },
  {
    name: "Sohail",
    role: "Devops",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQECLOaHHQtX-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728972706342?e=1741824000&v=beta&t=r181J6NyGauMzWujd24o_bbRBal4xDje1UAcFgA6Ux4",
  },
  {
    name: "Pavan",
    role: "Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQGilOZP2S1JFA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1736118862686?e=1736791200&v=beta&t=kcuxfMsvaLXP1u68rjND3qD35AkcY_5OeCTgqDBaFaI",
  },
];

export const values: Value[] = [
  {
    name: "Transparency",
    icon: TbWashDryclean,
  },
  {
    name: "Security",
    icon: MdOutlineSecurity,
  },
  {
    name: "Privacy",
    icon: MdPrivacyTip,
  },
];
