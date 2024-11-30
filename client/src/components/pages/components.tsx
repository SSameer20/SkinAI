import { User } from "@nextui-org/user";

import { Card, CardBody, CardHeader } from "@nextui-org/card";

export const URLPath = ({ path }: { path: string }) => {
  const urldata = path.toUpperCase().split("/").splice(1);
  return (
    <div className="flex flex-row gap-1">
      <span>{urldata.join(" > ")}</span>
    </div>
  );
};

export function UserCard() {
  return (
    <User
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        size: "md",
      }}
    />
  );
}

export function MetricCard({
  title,
  count,
}: {
  title: string;
  count: number | null;
}) {
  return (
    <Card className="w-[200px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        {count ? (
          <h4 className="font-bold text-large">{count}</h4>
        ) : (
          <h4 className="font-bold text-large">No Data</h4>
        )}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <small className="text-default-500">till now</small>
      </CardBody>
    </Card>
  );
}
