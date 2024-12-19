import { Screen, userLoginStatus } from "@/utils/helper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Navigation({
  logo = "SKIN.AI",
  className,
}: {
  className?: string;
  logo?: string;
}) {
  const [size, setSize] = useState<{ height: number; width: number }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [menu, setMenu] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);
  useEffect(() => {
    const status = userLoginStatus();
    if (status) {
      setLogged(true);
    } else setLogged(false);
    return () => setLogged(false);
  }, []);

  const handleLinkClick = () => {
    setMenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setSize({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      });
    };
  }, [size]);
  // w-full flex flex-row justify-between items-center overflow-hidden
  return (
    <div
      className={
        className +
        "w-full h-[100%] flex flex-row justify-between items-center overflow-hidden lg:px-[100px] md:px-[30px] sm:px-[20px] lg:py-[100px] md:py-[30px] sm:py-[20px]"
      }
      style={
        size.width <= Screen.SMALL
          ? { padding: "20px 20px" }
          : size.width <= Screen.MEDIUM
          ? { padding: " 20px 20px" }
          : { padding: " 20px 100px" }
      }
    >
      <Link
        to="/"
        className="font-bold bg-gradient-to-r  from-[#2565A4] to-[#14263D] bg-clip-text text-transparent"
        style={
          size.width <= Screen.SMALL
            ? { fontSize: "20px" }
            : size.width <= Screen.MEDIUM
            ? { fontSize: "24px" }
            : { fontSize: "28px" }
        }
      >
        {logo}
      </Link>
      {size.width > Screen.MEDIUM ? (
        <ul className="flex gap-10 justify-center items-center text-[#14263D]">
          <li>
            <Link to="/" className="hover:text-[black]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/app" className="hover:text-[black]">
              Test
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[black]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[black]">
              Contact
            </Link>
          </li>
          {!logged && (
            <div className="flex gap-10 justify-center items-center">
              <li
                className="px-[10px] py-[6px] border-2 rounded-[10px] text-[#2565A4] border-[#2565A4]"
                style={{ lineHeight: "1" }}
              >
                <Link to="/auth/login">Login</Link>
              </li>
              <li
                className="px-[10px] py-[6px] border-2 rounded-[10px] text-[white] border-[#2565A4] bg-[#2565A4] hover:bg-[#1D456F]"
                style={{ lineHeight: "1" }}
              >
                <Link to="/auth/register">Register</Link>
              </li>
            </div>
          )}
        </ul>
      ) : menu ? (
        <Icon
          name="close"
          key={"close"}
          onClick={() => setMenu((prev) => !prev)}
        />
      ) : (
        <Icon
          name="menu"
          key={"menu"}
          onClick={() => setMenu((prev) => !prev)}
        />
      )}

      {menu && (
        <ul
          className="absolute flex flex-col gap-10 justify-center w-[90vw]
        bg-[#f5e9fe] bottom-0 z-[100]
         h-[80vh] items-center text-[#14263D] bottom-0 border-t-2 transition-transform
          duration-900 ease-in-out"
        >
          <li>
            <Link
              to="/"
              className="hover:text-[black]"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/app"
              className="hover:text-[black]"
              onClick={handleLinkClick}
            >
              Test
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[black]"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[black]"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          {!logged && (
            <div className="flex flex-col gap-10 justify-center items-center">
              <li
                className="px-[10px] py-[6px] border-2 rounded-[10px] font-bold text-[#2565A4] border-[#2565A4]"
                style={{ lineHeight: "1" }}
              >
                <Link to="/auth/login" onClick={handleLinkClick}>
                  Login
                </Link>
              </li>
              <li
                className="px-[10px] py-[6px] border-2 rounded-[10px] text-[white] border-[#2565A4] bg-[#2565A4] hover:bg-[#1D456F] hover:border-[#1D456F]"
                style={{ lineHeight: "1" }}
              >
                <Link to="/auth/register" onClick={handleLinkClick}>
                  Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      )}
    </div>
  );
}
