/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChallengeDataType } from "@/utils/types";

export const ListBox = ({
  className,
  data,
  variant = "default",
}: {
  className?: string;
  data?: ChallengeDataType[];
  variant?: "default" | "light";
}) => {
  const variants = {
    default: " bg-[#D3DD98] text-[#000000]",
    light: " bg-[#E1DADA] text-[#000000]",
  };
  return (
    <div
      className={
        className +
        " h-auto w-[90%] rounded-xl flex justify-center items-center sm:min-h-full" +
        variants[variant]
      }
    >
      <div className="h-[100%] w-[4/5] flex justify-around items-center flex-wrap gap-10 p-10">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-2/5  sm:w-3/4 flex flex-col justify-start lg:items-center lg:text-center sm:items-center sm:text-center md:items-center md:text-center gap-2"
              >
                <img src={item.image} className="w-[100px] h-1/3" />
                <span className="font-semibold lg:text-[20px] md:text-[20px] sm:text-[16px]">
                  {item.title}
                </span>
                <span className="lg:w-3/5  sm:w-3/4 lg:text-[18px] md:text-[16px] sm:text-[12px] text-[#2c2e2d]">
                  {item.description}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
