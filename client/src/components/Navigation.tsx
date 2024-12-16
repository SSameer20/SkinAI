import { Screen, userLoginStatus } from "@/utils/helper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({
  className,
  logo = "SKIN.AI",
}: {
  className?: string;
  logo?: string;
}) {
  const [size, setSize] = useState<{ height: number; width: number }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [logged, setLogged] = useState<boolean>(false);
  useEffect(() => {
    const status = userLoginStatus();
    if (status) {
      setLogged(true);
    } else setLogged(false);
    return () => setLogged(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });

    return () =>
      window.removeEventListener("resize", () => {
        setSize({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      });
  }, [size]);

  return (
    <div
      className={className + "w-[100%] h-[10%] flex flex-row justify-between"}
      style={
        size.width <= Screen.SMALL
          ? { padding: " 6px 16px " }
          : size.width <= Screen.MEDIUM
          ? { padding: " 10px 20px" }
          : { padding: " 15px 100px" }
      }
    >
      <p
        className="font-bold"
        style={
          size.width <= Screen.SMALL
            ? { fontSize: "20px" }
            : size.width <= Screen.MEDIUM
            ? { fontSize: "24px" }
            : { fontSize: "28px" }
        }
      >
        {logo}
      </p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app">Test</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {!logged && (
          <div>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
