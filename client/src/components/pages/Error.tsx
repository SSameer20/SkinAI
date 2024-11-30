import RedirectButton from "../ui/RedirectButton";
import { Routes } from "../utilities/Routes";

export default function Error() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center gap-[20px]">
      <span className="text-4xl font-bold">Error 404</span>
      <span className="text-[15px]">Page Not Found</span>
      <RedirectButton
        to={Routes.HOME as string}
        className="text-xl text-[grey]"
      />
    </div>
  );
}
