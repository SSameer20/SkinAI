import { useEffect, useState } from "react";
interface ScreenSize {
  width: number;
  height: number;
}
export default function App() {
  const [screen, setScreen] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
                marginTop: "20vh",
                fontSize: "40px",
                letterSpacing: "3vw",
              }
            : screen.width >= 680
            ? { marginTop: "0vh", fontSize: "20px", letterSpacing: "3vw" }
            : {
                marginTop: "-10vh",
                fontSize: "20px",
                letterSpacing: "4vw",
              }
        }
      >
        COMING SOON
      </span>

      <div
        className="absolute flex flex-row"
        style={
          screen.width >= 1280
            ? {
                marginTop: "-50vh",
                fontSize: "180px",
                letterSpacing: "10vw",
              }
            : screen.width >= 680
            ? { marginTop: "-55vh", fontSize: "150px", letterSpacing: "5vw" }
            : {
                marginTop: "-40vh",
                fontSize: "80px",
                letterSpacing: "10px",
              }
        }
      ></div>
    </div>
  );
}
