import { useEffect, useState } from "react";
import swal from "sweetalert";
interface ScreenSize {
  width: number;
  height: number;
}

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [screen, setScreen] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  const screenSetup = (): void => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", screenSetup);

    return () => window.removeEventListener("resize", screenSetup);
  }, [screen]);

  const handleEmail = () => {
    if (isEmailValid(email)) {
      setFlag(true);
      setEmail("");
      swal("Thanks for Joining", "You have registered", "success");
    } else {
      setEmail("");
      swal("Email Error", "Provide Correct Email", "warning");
    }
  };
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden bg-black flex justify-center items-center">
      <span
        className="absolute text-white font-bold opacity-[0.1] z-0"
        style={
          screen.width >= 1280
            ? {
                marginTop: "-50vh",
                fontSize: "180px",
                letterSpacing: "5vw",
              }
            : screen.width >= 680
            ? { marginTop: "-55vh", fontSize: "150px", letterSpacing: "5vw" }
            : {
                marginTop: "-40vh",
                fontSize: "80px",
                letterSpacing: "3vw",
              }
        }
      >
        SKINAI
      </span>

      <div
        className="absolute bg-black rounded-[50%] z-1"
        style={
          screen.width >= 1280
            ? {
                boxShadow:
                  "0 -30px 50px -30px #0050FC,inset 0 10px 10px -5px #124FD1",
                marginTop: "5vh",
                width: "25vw",
                aspectRatio: "1/1",
              }
            : screen.width >= 680
            ? {
                boxShadow:
                  "0 -30px 50px -30px #0050FC,inset 0 10px 10px -5px #124FD1",
                marginTop: "-25vh",
                width: "30vw",
                aspectRatio: "1/1",
              }
            : {
                boxShadow:
                  "0 -30px 50px -30px #0050FC,inset 0 10px 10px -5px #124FD1",
                marginTop: "-15vh",
                width: "50vw",
                aspectRatio: "1/1",
              }
        }
      />

      <span
        className="absolute text-white font-bold  z-2"
        style={
          screen.width >= 1280
            ? {
                marginTop: "10vh",
                fontSize: "40px",
                letterSpacing: "3vw",
              }
            : screen.width >= 680
            ? { marginTop: "0vh", fontSize: "20px", letterSpacing: "3vw" }
            : {
                marginTop: "-10vh",
                fontSize: "20px",
                letterSpacing: "3vw",
              }
        }
      >
        COMING SOON
      </span>

      {flag ? (
        <span
          className="absolute text-white font-bold"
          style={
            screen.width >= 1280
              ? {
                  gap: "10px",
                  marginTop: "50vh",
                  fontSize: "50px",
                  textAlign: "center",
                }
              : screen.width >= 680
              ? {
                  gap: "10px",
                  marginTop: "40vh",
                  fontSize: "50px",
                  textAlign: "center",
                }
              : {
                  gap: "10px",
                  marginTop: "20vh",
                  fontSize: "20px",
                  textAlign: "center",
                }
          }
        >
          Thanks for Joining Us ❤️
        </span>
      ) : (
        <>
          <div
            className="absolute flex flex-row z-2"
            style={
              screen.width >= 1280
                ? {
                    gap: "10px",
                    marginTop: "50vh",
                  }
                : screen.width >= 680
                ? {
                    gap: "10px",
                    marginTop: "40vh",
                  }
                : {
                    gap: "10px",
                    marginTop: "20vh",
                  }
            }
          >
            <input
              className=""
              type="email"
              placeholder="Enter your Email"
              style={
                screen.width >= 1280
                  ? {
                      padding: "5px 10px",
                      borderRadius: "10px",
                    }
                  : screen.width >= 680
                  ? { padding: "5px 10px", borderRadius: "10px" }
                  : { padding: "5px 10px", borderRadius: "10px" }
              }
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button
              className="bg-[#0050FC] text-white font-bold"
              style={
                screen.width >= 1280
                  ? {
                      padding: "5px 10px",
                      borderRadius: "10px",
                    }
                  : screen.width >= 680
                  ? { padding: "5px 10px", borderRadius: "10px" }
                  : { padding: "5px 10px", borderRadius: "10px" }
              }
              onClick={handleEmail}
            >
              Sign Up
            </button>
          </div>

          <span
            className="text-white z-4"
            style={
              screen.width >= 1280
                ? {
                    marginTop: "70vh",
                    fontSize: "20px",
                    width: "40vw",
                    textAlign: "center",
                  }
                : screen.width >= 680
                ? {
                    marginTop: "60vh",
                    fontSize: "15px",
                    width: "60vw",
                    textAlign: "center",
                  }
                : {
                    marginTop: "35vh",
                    fontSize: "10px",
                    width: "70vw",
                    textAlign: "center",
                  }
            }
          >
            In the meantime, Sign up now for free premium access—exclusive to
            early registrants!
          </span>
        </>
      )}
    </div>
  );
}
