import { Outlet, useNavigate } from "react-router-dom";
import { Routes } from "./components/utilities/Routes";
import { SidebarItem } from "./components/utilities/Sidebar";

export default function App() {
  const navigate = useNavigate();
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
