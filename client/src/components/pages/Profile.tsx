// import { getCurrentPathUsingUrl } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { URLPath } from "./components";

export default function Profile() {
  const path = useLocation().pathname;
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <span>
        <URLPath path={path} />
      </span>
    </div>
  );
}
