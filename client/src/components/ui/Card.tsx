export function ValueCard({
  key,
  className,
  logo: Logo,
  name,
  variant = "default",
  size = "md",
}: {
  key: number | string;
  className?: string;
  name: string;
  logo: IconType;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "dark";
}) {
  const variantArray = ["default", "primary", "secondary", "dark"];
  const variants = {
    default: "bg-[#D0E8C5] text-black",
    primary: "bg-[#CDC1FF] text-black",
    secondary: "bg-[#F5F4B3] text-black",
    dark: "bg-[#6482AD] text-white",
  };

  const sizes = {
    sm: "50px",
    md: "100px",
    lg: "150px",
  };

  const variantClass =
    variant === "default"
      ? variants[
          variantArray[
            Math.floor(Math.random() * variantArray.length)
          ] as keyof typeof variants
        ]
      : variants[variant];

  return (
    <div
      key={key}
      className={
        className +
        " flex flex-col justify-center items-center p-6 rounded-lg shadow-md h-auto "
      }
    >
      <div className={`${variantClass} rounded-[50%] p-2`}>
        <Logo size={sizes[size]} />
      </div>
      <h1>{name}</h1>
    </div>
  );
}
