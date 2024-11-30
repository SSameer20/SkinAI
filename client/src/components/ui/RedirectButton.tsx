import { useNavigate } from "react-router-dom";

export default function RedirectButton({
  to,
  className,
}: {
  to: string;
  className?: string;
}) {
  const navigate = useNavigate();
  const back = "Redirect Back to home";
  return (
    <div
      onClick={() => navigate(to)}
      className={className}
      style={{ textDecoration: "underline", cursor: "pointer" }}
    >
      {back}
    </div>
  );
}
