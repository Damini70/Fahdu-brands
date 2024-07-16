"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import LoginDesign from "../logindesign/page";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";


export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  // loading
  const [loading, setLoading] = React.useState(false);

  // once data collected
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      });
      if (response) {
        console.log(response);
        toast.success("successfully login");
        dispatch(login(response.data));
        router.push("/brandenquiry");
      }
    } catch (error: any) {
      toast.error("Some error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email?.length > 0 && user?.password?.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  function handleLogInWithGoogle() {
    signIn("google");
  }
  return (
    <>
      <ToastContainer autoClose={10000} />
      <div className="container login_section flex items-center justify-between max-w-[1280px] h-[100vh] m-auto max-md:justify-center">
        <div className="w-[621px] max-md:hidden">
          <LoginDesign />
        </div>
        <div className="w-[507px]">
          <h1 className="login_title">
            {loading ? "Login Processing" : "Login"}
          </h1>
          <p className="login_subtitle">
            Welcome to Fahdu, Login to Continue...
          </p>
          <div className="flex flex-col">
            <div className="flex flex-col w-full mb-[15px]">
              <label className="brands_label" htmlFor="email">
                Email*
              </label>
              <input
                className="brands_input"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full mb-[15px]">
              <label className="brands_label" htmlFor="phone">
                Password*
              </label>
              <input
                className="brands_input"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
              />
              <button className="text-[14px] leading-[16px] font-[500] ml-[auto] mt-[5px]">
                Forgot Password?
              </button>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px] mb-[20px]">
              <input
                className="w-[21px] h-[21px] rounded-[6px] cursor-pointer"
                type="checkbox"
              />
              <p className="text-[18px] leading-[21px] font-[500]">
                Remember me.
              </p>
            </div>
            <button onClick={onLogin} className="login_button">
              Log In
            </button>
            {/* <div>
                        <span className="login_divider">Or</span>
                    </div>
                    <button className="continue_with_google flex justify-center items-center gap-[10px] text-[16px] leading-[21px] font-[500] rounded-[14px]" onClick={handleLogInWithGoogle}>
                        <Image className="w-[21px] h-[21px]" src={"/icons/google-icon.svg"} alt="google icon" width={21} height={21} />
                        Continue with Google
                    </button> */}
            <p className="text-[18px] leading-[21px] font-[500] text-center mt-[20px]">
              Do you have an account?{" "}
              <Link
                href={"/signup"}
                className="text-[#FFA86B] font-[600] hover:underline"
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
