import Navigation from "@/components/Navigation";
import dermitologist from "../media/dermitologist.jpg";
import remote from "../media/online_treatment.jpg";
import { useEffect, useState } from "react";
import { ListBox } from "@/components/TextComponents";
import { SeedChallenges } from "@/utils/SeedData";

export default function Home() {
  const [size, setSize] = useState<{ height: number; width: number }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div className=" flex flex-col w-full min-h-screen overflow-x-hidden scrollbar-hide scrollbar-thumb-gray-500">
      {/* Navigation Bar */}
      <div className=" h-[10vh]">
        <Navigation className="sticky" />
      </div>

      <div className="lg:px-[100px] md:px-[30px] sm:px-[16px] lg:gap-10">
        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row md:flex-col sm:flex-col w-full justify-center items-center h-auto lg:h-[90vh] overflow-y-auto sm:gap-10">
          {/* Main Image and Content */}
          <div className="flex flex-col lg:flex-row-reverse md:flex-col sm:flex-col lg:h-[80vh] items-center justify-around w-full lg:w-2/3 gap-6">
            {/* Image */}
            <img
              src={dermitologist}
              className="rounded-[20px] h-[50vh] lg:h-[70vh] w-[90%] lg:w-auto aspect-[2/3]"
              alt="Dermatologist"
            />

            {/* Text Content */}
            <div className="flex flex-col gap-6 items-start text-left lg:text-left w-full lg:w-1/2 sm:text-left">
              <p className="text-2xl lg:text-4xl font-semibold py-5 px-4 rounded-[10px] lg:leading-10">
                Analyze your skin in seconds with{" "}
                <span className="text-[#357FC2]">SKIN.AI</span>
              </p>
              <button className="px-6 py-3 border-2 rounded-[10px] bg-[#357FC2] text-white font-bold hover:bg-[#94BEE5] hover:text-[#357FC2] transition">
                Try Now
              </button>
            </div>
          </div>

          {/* Sub Image and Content */}
          <div className="flex flex-col items-center lg:items-start justify-end sm:justify-center lg:gap-4  w-full lg:w-1/3 lg:h-[80vh] sm:mb-[50px] sm:gap-6 sm:h-[100vh]">
            <p className="text-sm lg:text-base w-[90%] lg:w-[60%] text-center lg:text-left">
              Connect with expert dermatologists for accurate diagnosis and
              treatment. Focused on skin cancer analysis and teledermatology for
              remote areas.
            </p>
            <img
              src={remote}
              className="rounded-[20px] w-[90%] lg:w-[60%] aspect-[2/3]"
              alt="Remote Treatment"
            />
          </div>
        </div>

        {/* Challenges */}
        <div className="w-[100%] h-[100vh] flex flex-col justify-start items-center lg:py-[100px] gap-10">
          <span className="lg:text-3xl font-bold">The Challenges We Solve</span>
          <ListBox variant="default" data={SeedChallenges} />
        </div>
      </div>
    </div>
  );
}
