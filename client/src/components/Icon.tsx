import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
export default function Icon({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) {
  switch (name.toLowerCase()) {
    case "menu":
      return <GiHamburgerMenu onClick={onClick} size={"20px"} />;
    case "close":
      return <IoClose onClick={onClick} size={"20px"} />;
  }
}
