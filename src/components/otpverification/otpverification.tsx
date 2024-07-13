"use client";

import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
// import LoginDesign from "";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import style from './otpverification.module.css';

export default function OtpVerification({email,isCreateNewPassword}:any) {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  // loading
  const [loading, setLoading] = React.useState(false);

  //otp verification
  const [otp, setOtp] = useState("");
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

 // switch to create new password screen
 const [isVerified, setIsVerified] = useState(true) 

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputs.length);
    if (inputs.length > 4) {
      const numbers = inputs.join("");
      setOtp(() => numbers);
    }
  }, [inputs]);


    //   otp verification
    const handleVerifyOtp = async () => {
        setLoading(true);
       
      
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/forgot-password/verify`, { email: email, emailCode:otp});
            // toast('OTP verified');
            console.log(response.data)
            if(response.data){
                toast.success(response.data.message);
                // setIsVerified(true)
                isCreateNewPassword(isVerified)
                console.log(isCreateNewPassword(isVerified),"isCreateNewPassword(isVerified)");
            }
           
        } catch (error:any) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };


    const handleInputChange = (index: any, value: any) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(()=>newInputs);

        // Automatically move focus to the next input if exactly one letter is entered
        if (value.length === 1) {
            focusNextInput(index);
        }
    };

    const focusNextInput = (currentIndex: any) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < inputs.length) {
            document.getElementById(`input-${nextIndex}`).focus();
        }
    };
    const focusPrevInput = (currentIndex: any) => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            document.getElementById(`input-${prevIndex}`).focus();
        }
    };

    const handleKeyDown = (event: any, index: any) => {
      
        if (event.key === 'Backspace') {
            if (inputs[index] === '') {
                event.preventDefault(); 
                focusPrevInput(index);
        } else if (inputs[index].length === 1) {
            // Clear the input value when length is 1 and Backspace is pressed
            const newInputs = [...inputs];
            newInputs[index] = '';
            setInputs(newInputs);
          }
        }
      };
      const resend=async()=>{
  
         try{
            const response= await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/resend-otp`,{email:user.email});
            // console.log('OTP sent successfully')
            if(response.data){
                toast.success(response?.data?.message);
            }
         }catch(error:any){
            toast.error(error?.response?.data?.message);
         }finally{

         }
        
      }

      const cancelVerification = () => {
        router.push('/login');
      }
  return (
    <>
      {/* otp verification */}
      <div className="w-[507px]">
        <h1 className="login_title">OTP Verification</h1>
        <p className="login_subtitle">
          Enter the verification code we just sent on your email address.
        </p>
        <div className={style.input}>
          {inputs.map((value, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="number"
              step="1"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className={
                value.length === 1 ? `${style.in} ${style.filled} ` : style.in
              }
              onKeyDown={(e) => handleKeyDown(e, index)}
              onKeyPress={(e) => {
                if (e.key === ".") {
                  e.preventDefault();
                }
              }}
            />
          ))}
        </div>
        <div className="my-12">
          <button
            className={`${style.btn} bg-[#FFA86B]`}
            onClick={handleVerifyOtp}
          >
            Verify
          </button>
          <button
            className={`${style.btn}`}
            onClick={cancelVerification}
          >
            Cancel
          </button>
        </div>
        <div className={style.code}>
          Didn't Recieve Code?{" "}
          <span className="text-[#FFA86B] cursor-pointer" onClick={resend}>
            Resend
          </span>
        </div>
      </div>
    </>
  );
}
