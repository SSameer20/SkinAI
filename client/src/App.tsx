import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Routes } from "./components/utilities/Routes";

const SidebarItem = ({ text, to }: { text: string; to: string }) => {
  const navigate = useNavigate();
  const current = useLocation();
  const cur: boolean = current.pathname
    .toLowerCase()
    .includes(text.toLowerCase());

  return (
    <div
      className={
        cur
          ? "px-4 border-[1px] border-[#3D3939] rounded-[5px] bg-[#3D3939]"
          : "transition-all px-4 ease-in-out delay-20 hover:border-[1px] border-[#3D3939] hover:px-4 duration-300 rounded-[5px] hover:bg-[#3D3939]"
      }
      style={{ cursor: "pointer" }}
      onClick={() => navigate(to)}
    >
      {text}
    </div>
  );
};

export default function App() {
  const navigate = useNavigate();
  // const [current, setCurrent] = useState<string>("Dashboard");
  return (
    <div className="w-full h-[100vh] z-0 flex">
      <div className="flex-[20%] m-2 p-[10px] flex flex-col gap-[50px] ">
        <span
          className="text-4xl font-bold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(Routes.HOME)}
        >
          SKIN.AI
        </span>
        <div className="flex flex-col gap-[15px]">
          <SidebarItem text="Dashboard" to={Routes.DASHBOARD} />
          <SidebarItem text="Profile" to={Routes.PROFILE} />
        </div>
      </div>
      <div className="flex-[90%] border-[1px] m-2 rounded-[10px] p-[10px] bg-[#3D3939]">
        <Outlet />
      </div>
    </div>
  );
}
