import { useLocation, useNavigate } from "react-router-dom";

export const SidebarItem = ({ text, to }: { text: string; to: string }) => {
  const navigate = useNavigate();
  const current = useLocation();
  const cur: boolean = current.pathname
    .toLowerCase()
    .includes(text.toLowerCase());

  return (
    <div
      className={
        cur
          ? "px-4 py-2 border-[1px] border-[#3D3939] rounded-[5px] bg-[#3D3939]"
          : "transition-all px-4 py-2 ease-in-out delay-20 hover:border-[1px] border-[#3D3939] hover:px-4 duration-300 rounded-[5px] hover:bg-[#3D3939]"
      }
      style={{ cursor: "pointer" }}
      onClick={() => navigate(to)}
    >
      {text}
    </div>
  );
};
