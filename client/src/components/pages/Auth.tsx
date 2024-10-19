import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { AuthForm } from "../utilities/Auth.ds";
import axios from "axios";
import "../../styles/auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const [form, setForm] = useState<boolean>(true);
  const [load, setLoad] = useState<boolean>(false);
  const [screen, setScreen] = useState<{ w: number; h: number }>({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthForm>();
  const handleResize = () => {
    setScreen({ w: window.innerWidth, h: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen]);

  const handleForm = () => {
    setForm((state) => {
      if (state) return false;
      else return true;
    });
  };

  const handleLogin = async (data: AuthForm) => {
    try {
      const response = await axios.post(
        "https://skin-ai-api.vercel.app/api/v1/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (response.status === 201) {
        alert("Success");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      reset();
    }
  };

  const handleRegister = async (data: AuthForm) => {
    try {
      if (
        !data.email ||
        !data.password ||
        !data.fullName ||
        !data.mobile ||
        !data.confirmPassword
      )
        return alert("All fields are required");
      await axios
        .post("/server/api/v1/user/register", {
          email: data.email,
          password: data.password,
          name: data.fullName,
          mobile: data.mobile,
          profileImage: data.profileURL || null,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log("error");
    } finally {
      reset();
    }
  };

  return (
    <div className="relative flex w-full h-screen justify-center items-center authentication overflow-hidden bg-black">
      <div
        className="absolute card1 z-1"
        style={{
          height: screen.w <= 420 ? "40vh" : "60vh",
          width: screen.w <= 420 ? "40vh" : "60vh",
        }}
      ></div>
      <div
        className="absolute card2 z-1"
        style={{
          height: screen.w <= 420 ? "40vh" : "60vh",
          width: screen.w <= 420 ? "40vh" : "60vh",
        }}
      ></div>
      <div className="flex lg:w-1/4 md:w-1/3 max-[420px]:w-2/3 flex-wrap flex-col md:flex-nowrap gap-4 border-1 p-5 rounded-xl justify-center items-center backdrop-blur-2xl  z-10">
        <div className="flex w-2/3 lg:flex-row lg:gap-5 md:flex-row md:gap-5 flex-col z-10">
          <p
            className="test-2xl cursor-pointer font-normal hover:border-b-yellow-50 ease-in duration-40"
            id="login"
            style={
              form
                ? {
                    borderBottomColor: "white",
                    paddingBottom: "5px",
                    fontSize: "large",
                    fontWeight: "800",
                    color: "text-neutral-800",
                  }
                : { border: "transparent" }
            }
            onClick={handleForm}
          >
            Login
          </p>
          <p
            className="test-sm cursor-pointer font-normal hover:border-b-yellow-50 ease-in duration-40"
            id="register"
            style={
              form
                ? { border: "transparent" }
                : {
                    borderBottomColor: "white",
                    paddingBottom: "5px",
                    fontSize: "large",
                    fontWeight: "800",
                    color: "text-neutral-800",
                  }
            }
            onClick={handleForm}
          >
            Register
          </p>
        </div>
        {form ? (
          <form
            className="flex w-4/5 flex-wrap flex-col md:flex-nowrap gap-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Input
              type="email"
              label="Email"
              {...register("email", { required: "Email is required" })}
            />
            <Input
              type="password"
              label="Password"
              {...register("password", { required: "Password is required" })}
            />
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
        ) : (
          <form
            className="flex w-4/5 flex-wrap flex-col md:flex-nowrap gap-4"
            onSubmit={handleSubmit(handleRegister)}
          >
            <Input
              type="text"
              label="Full Name"
              {...register("fullName", { required: "Full NAme required" })}
            />
            <Input type="number" label="Mobile" {...register("mobile")} />
            <Input
              type="email"
              label="Email"
              {...register("email", { required: "Email is required" })}
            />
            <Input
              type="password"
              label="Password"
              {...register("password", { required: "Password is required" })}
            />
            <Input
              type="password"
              label="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            <Button type="submit" color="primary">
              Register
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
