// import GridPattern from "../ui/animated-grid-pattern";
import { motion } from "framer-motion";
import WordRotate from "../ui/word-rotate";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroVideoDialog from "../ui/hero-video-dialog";
import { Routes } from "../utilities/Routes";
import { ReverseMarquee, StraightMarquee } from "../utilities/ReviewsMarquee";
import { cn } from "@/lib/utils";

interface ActionLabel {
  color?: string;
  content: string;
}

const ActionLabel = (props: ActionLabel) => {
  const color: string = props.color || "yellow";
  const content: string = props.content;
  return (
    <div
      className="flex justify-center items-center gap-2 w-full"
      style={{
        border: `1px solid ${color}`,
        borderRadius: "10px",
        padding: "1px 10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={window.innerWidth <= 420 ? "size-3" : "size-4"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            color: `${color}`,
          }}
          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
        />
      </svg>
      <span
        style={{
          color: `${color}`,
          fontSize: window.innerWidth <= 420 ? "10px" : "15px",
        }}
      >
        {content.toUpperCase()}
      </span>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState<{ w: number; h: number }>({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const handleScreen = () => {
    setScreen({
      w: window.innerWidth,
      h: window.innerHeight,
    });
    console.log(screen);
  };

  window.addEventListener("resize", handleScreen);
  return (
    <div
      className="relative w-[100%] h-[100vh] overflow-x-hidden bg-[#252222]"
      style={{
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
      }}
    >
      {/* <GridPattern /> */}
      <div className="relative w-[100%] h-[100vh] overflow-y-hidden flex flex-col justify-center items-center">
        <motion.div
          className="absolute top-5 left-5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <span className="text-[20px] font-bold text-[#FFFFFF]]">SKIN.</span>
          <span className="text-[20px] font-bold text-[#46A682]">AI</span>
        </motion.div>
        <motion.div
          className="absolute top-5 right-5 flex gap-5 mr-5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <button
            style={{
              color: "#22EAA0",
              fontWeight: "700",
              border: "1px solid #22EAA0",
              borderRadius: "10px",
              padding: "5px 10px",
            }}
            onClick={() => navigate(Routes.AUTH)}
          >
            Register
          </button>
          <button
            style={{
              color: "black",
              fontWeight: "700",
              border: "1px solid #22EAA0",
              backgroundColor: "#22EAA0",
              borderRadius: "10px",
              padding: "5px 10px",
            }}
            onClick={() => navigate(Routes.AUTH)}
          >
            Login
          </button>
        </motion.div>
        <div
          className="absolute"
          style={{
            marginTop: screen.w <= 420 ? "-120vh" : "-130vh",
            height: "100px",
            width: "30vw",
            backgroundColor: "rgba(70, 166, 130, 0.8)",
            borderRadius: "100px",
            boxShadow:
              screen.w <= 420
                ? "0 0 200px 100px rgba(70, 166, 130, 0.9)"
                : "0 0 800px 100px rgba(70, 166, 130, 0.9), 0 0 800px 100px rgba(70, 166, 130, 0.6)",
          }}
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: screen.w <= 420 ? -100 : -70, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ActionLabel content="Remote Health Care" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: screen.w <= 420 ? -100 : -70,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="lg:text-[96px] max-[720px]:text-[75px] max-[420px]:text-[60px] font-bold text-[#FFFFFF]]">
            SKIN.
          </span>
          <span className="lg:text-[96px] max-[720px]:text-[75px] max-[420px]:text-[60px] font-bold text-[#46A682]">
            AI
          </span>
        </motion.div>
        <motion.span
          className="absolute"
          initial={{
            y: screen.w <= 420 ? -60 : 70,
            opacity: 0,
          }}
          animate={{
            y: screen.w <= 420 ? -50 : 20,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <WordRotate
            className="lg:text-[20px] md:text-[20px] max-[420px]:text-[15px] text-[rgba(255,255,255,0.5)] dark:text-white text-center lg:w-[30vw] md:w-[40vw] max-[420px]:w-[70vw]"
            words={[
              "AI Powered Teledermitologist and bridging gap in remote health care",
              "Closing the Gap in Skin Care with AI",
            ]}
          />
        </motion.span>
        <motion.div
          initial={{ y: screen.w <= 420 ? 120 : 80, opacity: 0 }}
          animate={{
            y: screen.w <= 420 ? -20 : 20,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button color="secondary">Take Assist</Button>
        </motion.div>
      </div>

      <div className="relative w-[100%] h-[100vh] overflow-y-hidden flex flex-col items-center justify-start gap-[10vh]">
        <div
          className="absolute"
          style={{
            marginTop: screen.w <= 420 ? "18vh" : "30vh",
            marginLeft: screen.w <= 420 ? "-70vw" : "-40vw",
            height: "10px",
            width: "5vw",
            backgroundColor: "#4F1787",
            borderRadius: "100px",
            boxShadow:
              screen.w <= 420
                ? "0 0 100px 60px #4F1787"
                : "0 0 300px 50px #4F1787, 0 0 300px 50px #4F1787",
          }}
        />
        <div
          className="absolute"
          style={{
            marginTop: screen.w <= 420 ? "35vh" : "80vh",
            marginLeft: screen.w <= 420 ? "60vw" : "50vw",
            height: "10px",
            width: "5vw",
            backgroundColor: "#A2678A",
            borderRadius: "100px",
            boxShadow:
              screen.w <= 420
                ? "0 0 100px 60px #A2678A"
                : "0 0 200px 100px #A2678A, 0 0200px 100px #A2678A",
          }}
        />
        <span className="text-4xl font-bold">Video Section</span>
        <motion.div>
          <HeroVideoDialog
            className={cn(
              "dark:hidden block",
              screen.w <= 420 ? "w-[80vw] h-[50vh]" : "w-[60vw]"
            )}
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/96nOCFnIhFE
          "
            thumbnailSrc="https://cdn.prod.website-files.com/603f5d1df4ee236b69719ff2/65f188ad48e01093c76bf036_The-Dominance-of-AI-Skin-Analysis-Technology-Over-Conventional-Hardware.webp"
            thumbnailAlt="Skin Video"
          />
        </motion.div>
      </div>
      <div className="relative flex flex-col justify-center items-start w-full h-[100vh] overflow-x-hidden ">
        <motion.div
          initial={{ y: screen.w <= -200 ? 0 : 80, opacity: 0 }}
          animate={{
            y: screen.w <= 420 ? -250 : 20,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <StraightMarquee />
          <ReverseMarquee />
        </motion.div>
      </div>
    </div>
  );
}
