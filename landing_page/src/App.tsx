import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const validEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleEmail = async (): Promise<void> => {
    try {
      setFlag(true);
      if (!validEmail(email)) {
        swal("Invalid", "use valid email", "warning");
        return;
      }
      const response = await axios.post(
        "https://api-skinai.onrender.com/api/v1/launch/register",
        { email }
      );

      if (response.status === 201) {
        swal("Registered", "Thanks for Joining", "success");
        return;
      }

      throw new Error(`${response.data.message}`);
    } catch (error) {
      swal("Error while registering", `${error}`, "error");
    } finally {
      setFlag(false);
      setEmail("");
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex justify-center items-center">
      <span
        className={`absolute text-white font-bold opacity-10 z-0 
        lg:-mt-[50vh] lg:text-[180px] lg:tracking-[5vw] 
        md:-mt-[55vh] md:text-[150px] md:tracking-[5vw]
        sm:-mt-[40vh] sm:text-[80px] sm:tracking-[3vw]`}
      >
        SKINAI
      </span>

      <div
        className={`absolute bg-black rounded-full z-1 
        lg:shadow-[0_-30px_50px_-30px_#0050FC,inset_0_10px_10px_-5px_#124FD1] lg:mt-[5vh] lg:w-[25vw] lg:aspect-square 
        md:shadow-[0_-30px_50px_-30px_#0050FC,inset_0_10px_10px_-5px_#124FD1] md:-mt-[25vh] md:w-[30vw] md:aspect-square 
        sm:shadow-[0_-30px_50px_-30px_#0050FC,inset_0_10px_10px_-5px_#124FD1] sm:-mt-[15vh] sm:w-[50vw] sm:aspect-square`}
      ></div>

      <span
        className={`absolute text-white font-bold z-2 
        lg:mt-[10vh] lg:text-[40px] lg:tracking-[3vw] 
        md:mt-[0vh] md:text-[20px] md:tracking-[3vw] 
        sm:-mt-[10vh] sm:text-[20px] sm:tracking-[3vw]`}
      >
        COMING SOON
      </span>

      {flag ? (
        <span
          className={`absolute text-white font-bold 
          lg:mt-[50vh] lg:text-[50px] lg:text-center 
          md:mt-[40vh] md:text-[50px] md:text-center 
          sm:mt-[20vh] sm:text-[20px] sm:text-center`}
        >
          Thanks for Joining Us ❤️
        </span>
      ) : (
        <>
          <div
            className={`absolute flex flex-row z-2 
            lg:gap-10 lg:mt-[50vh] 
            md:gap-10 md:mt-[40vh] 
            sm:gap-10 sm:mt-[20vh]`}
          >
            <input
              className="px-5 py-2 rounded-lg"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="bg-[#0050FC] text-white font-bold px-5 py-2 rounded-lg"
              onClick={handleEmail}
            >
              Sign Up
            </button>
          </div>

          <span
            className={`text-white z-4 text-center 
            lg:mt-[70vh] lg:text-[20px] lg:w-[40vw] 
            md:mt-[60vh] md:text-[15px] md:w-[60vw] 
            sm:mt-[35vh] sm:text-[10px] sm:w-[70vw]`}
          >
            In the meantime, Sign up now for free premium access exclusive to
            early registrants!
          </span>
        </>
      )}
    </div>
  );
}
