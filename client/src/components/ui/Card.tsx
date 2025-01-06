export function TeamCard({
  key,
  className,
  name,
  role,
  image,
}: {
  key: number | string;
  className?: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div
      key={key}
      className={
        className +
        " flex flex-row justify-around items-center bg-white p-6 rounded-lg shadow-md h-auto"
      }
    >
      <img src={image} alt="user" className=" h-[100px] rounded-[50%]" />
      <div className="h-auto">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-blue-600 mb-3">{role}</p>
      </div>
    </div>
  );
}
