import Link from "next/link";
import { useRecoilValue } from "recoil";
import { UserAtom } from "@/store/User";
import { Kaisei_Opti } from "next/font/google";

interface propType {
  className?: string;
}
const kaiseiOpti = Kaisei_Opti({
  weight: "400",
  subsets: ["latin"],
});
export default function Navigation({ className }: propType) {
  const user = useRecoilValue(UserAtom);

  return (
    <div className={`${className} ${styles.nav}`}>
      <span className={`${styles.logo} ${kaiseiOpti.className}`}>SKINAI</span>
      <div className={styles.navItem}>
        {user && (
          <>
            <Link href="/">
              <div className={`${styles.links}`}>Home</div>
            </Link>
            <Link href="/dashboard">
              <div className={`${styles.links}`}>Dashboard</div>
            </Link>
          </>
        )}
        {user == null && (
          <>
            <Link href="/auth/login" className="group">
              <div
                className={`relative overflow-hidden ${styles.links} ${styles.login} ${styles.animation}`}
              >
                <span className="relative z-10 text-[var(--color-shamrock-500)] group-hover:text-black">
                  Login
                </span>
              </div>
            </Link>

            <Link href="/auth/register">
              <div className={`${styles.links} ${styles.register}`}>
                Register
              </div>
            </Link>
          </>
        )}
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b6b7c3] to-transparent" /> */}
    </div>
  );
}

const styles = {
  nav: `relative flex justify-between py-5 px-10 h-[10vh] items-center bg-transparent`,
  logo: `font-bold cursor-pointer`,
  navItem: `flex gap-5`,
  links: `font-medium hover:opacity-80`,
  login: `border border-[var(--color-shamrock-500)] px-5 py-2 rounded-xl
        `,
  register: `bg-[var(--color-shamrock-500)] text-[var(--color-woodsmoke-950)] px-4 py-2 rounded-xl hover:bg-[var(--color-shamrock-600)]`,
  animation: `after:content-[''] after:absolute after:block after:w-[110%] after:h-[100%] after:bg-[var(--color-shamrock-500)] after:top-[100%] after:left-0 after:transition-all after:rounded-t-[50%] after:duration-300 group-hover:after:top-0 group-hover:after:left-0 group-hover:after:rounded-t-[0px] group-hover:after:z-5`,
};
