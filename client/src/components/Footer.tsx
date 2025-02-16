export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={
        className +
        " w-[100%] flex lg:flex-row sm:flex-col gap-5 bg-[#5F5D5D] mt-5 py-[50px] lg:px-[100px] lg:justify-around  sm:justify-center sm:items-center  items-start"
      }
    >
      <span className="lg:text-2xl md:text-2xl sm:text-[16px]  font-bold bg-gradient-to-tr  from-white via-slate-50 to-white bg-clip-text text-transparent">
        SKIN AI
      </span>
      <div className="flex lg:flex-row sm:flex-row sm:gap-10 lg:gap-10">
        <ul className="text-white text-sm">
          <span className="font-semibold text-white text-lg">Explore</span>
          <li>
            <a href="#Blogs">Blogs</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Trends</a>
          </li>
        </ul>
        <ul className="text-white text-sm">
          <span className="font-semibold text-white text-lg">Developer</span>
          <li>
            <a
              href="https://github.com/SSameer20/SkinAI/issues"
              target="_blank" rel="noreferrer"
            >
              Contribute
            </a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a
              href="https://github.com/SSameer20/SkinAI/issues/new/choose"
              target="_blank" rel="noreferrer"
            >
              Report Issue
            </a>
          </li>
        </ul>
        <ul className="text-white text-sm">
          <span className="font-semibold text-white text-lg">Social</span>
          <li>
            <a href="https://github.com/SSameer20/SkinAI" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/SSameer20/SkinAI" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/SSameer20/SkinAI" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
