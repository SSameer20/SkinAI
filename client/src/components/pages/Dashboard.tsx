import { useLocation } from "react-router-dom";
import { MetricCard, URLPath, UserCard } from "./components";

export default function Dashboard() {
  // const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-10">
      <div>
        <URLPath path={path} />
      </div>

      <div className="px-[50px] py-[20px] flex flex-col items-start gap-10">
        <UserCard />
        <span
          className="text-4xl"
          style={{ fontWeight: "500", color: "yellow" }}
        >
          Hey! Sameer
        </span>
        <MetricCard title="Total Test Conducted" count={1} />
        <MetricCard title="Test Result" count={0} />
      </div>
    </div>
  );
}
