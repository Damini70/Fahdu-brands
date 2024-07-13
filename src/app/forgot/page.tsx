"use client";

import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import LoginDesign from "../logindesign/page";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import style from './forgot.module.css';
import OtpVerification from "@/src/components/otpverification/otpverification";
import CreateNewPassword from "@/src/components/createpassword/createpassword";

export default function ForgotPage() {
  const router = useRouter();
  const session = useSession();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  // loading
  const [loading, setLoading] = React.useState(false);

  // switch component
  const [emailComponent, setEmailComponent] = useState(true)   
  const [otpVerification, setOtpVerification] = useState(false)   
  const [createPassword, setCreatePassword] = useState(false)   

  // once data collected
  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/forget-password`,
        user
      );
      if (response.data) {
        toast.success(response?.data?.message);
        // router.push("/brandenquiry");
        setEmailComponent(false)
        setOtpVerification(true)
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePasswordData =(value: any) => {
    setCreatePassword(value)
    console.log(createPassword,"createPassword");
    
  }


  return (
    <>
      <ToastContainer autoClose={10000} />

      <div className="container login_section flex items-center justify-between max-w-[1280px] h-[100vh] m-auto max-md:justify-center">
        <div className="w-[621px] max-md:hidden">
          <LoginDesign />
        </div>

        {/* forgot password */}
        { emailComponent ?
           ( <div className="w-[507px]">
            <h1 className="login_title">Forgot Password?</h1>
            <p className="login_subtitle">
              Don’t worry it occurs. Please enter the email address linked with
              your account.
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
              <button disabled={loading} onClick={onSubmit} className="login_button">
                Send Code
              </button>
            </div>
          </div>) : 
          <>{!createPassword ?  <OtpVerification isCreateNewPassword={handleCreatePasswordData} email={user.email} />: <CreateNewPassword email={user.email} />}</>
        }

        {/* otp verification */}
        {/* { otpVerification ? 
            (<OtpVerification email={user.email} />) : <></>
        } */}

        {/* create new password */}
        {/* <CreateNewPassword /> */}
      </div>
    </>
  );
}
