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
        " h-[100%] w-[80%] rounded-xl flex justify-center items-center sm:min-h-full" +
        variants[variant]
      }
    >
      <div className="h-4/5 w-[4/5] flex justify-around items-center flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-2/5  sm:w-3/4 lg:h-1/5 sm:h-1/6 flex flex-col justify-start lg:items-start lg:text-left sm:items-center sm:text-center md:items-center md:text-center"
              >
                <span className="font-semibold lg:text-[20px] md:text-[20px] sm:text-[16px]">
                  {item.title}
                </span>
                <span className="lg:text-[18px] md:text-[16px] sm:text-[12px]">
                  {item.description}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
