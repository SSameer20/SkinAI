import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Ayesha",
    username: "@ayesha",
    body: "The AI skin assistant helped me diagnose a condition that would have taken days to get treated in my village. It's incredible!",
    img: "https://avatar.vercel.sh/ayesha",
  },
  {
    name: "Ravi",
    username: "@ravi",
    body: "Living far from any hospital, this app has been a lifesaver. The accuracy of its diagnosis was spot on!",
    img: "https://avatar.vercel.sh/ravi",
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "I didn’t think it was possible to get such precise skin advice in a remote location like mine. This AI app is amazing!",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "Kumar",
    username: "@kumar",
    body: "Thanks to this AI skin tool, I could treat my skin rash without waiting for days to visit the nearest doctor.",
    img: "https://avatar.vercel.sh/kumar",
  },
  {
    name: "Sara",
    username: "@sara",
    body: "The AI identified my skin problem quickly and suggested remedies that worked perfectly, all from my village. It's a game-changer!",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "Lila",
    username: "@lila",
    body: "Having no access to a dermatologist in my area, this AI tool is the closest thing I have to proper care. It's so reliable!",
    img: "https://avatar.vercel.sh/lila",
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/40">
        {body}
      </blockquote>
    </figure>
  );
};

export function StraightMarquee() {
  return (
    <div className="bg-transparent w-full overflow-x-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

export function ReverseMarquee() {
  return (
    <div className="bg-transparent w-full overflow-x-hidden">
      <Marquee
        pauseOnHover
        reverse
        className="[--duration:20s]"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
