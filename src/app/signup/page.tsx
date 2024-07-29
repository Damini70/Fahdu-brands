/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link"
import React, { useEffect, useState ,useRef} from "react";
import { signIn, useSession } from 'next-auth/react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginDesign from "../logindesign/page";
import Modal from '../../components/modal/Modal';
import style from './Signup.module.css';
import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";


export default function SignupPage() {
    const router = useRouter();
    const session = useSession();

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        cPassword: ''
    })


    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = React.useState(false);
    const [inputs, setInputs] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (user.email.length > 0 && user.fullName.length > 0 && user.password.length > 0 && user.cPassword.length > 0 && user.phoneNumber.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user]);


    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, inputs.length);
       if(inputs.length>4){
        const numbers = inputs.join('');
        setOtp(()=>numbers);
       }
      }, [inputs]);

    // once data collected
    const onSignup = async () => {
       
        setLoading(true); // Set loading to true at the start of the operation
        const data = { ...user, role: 'brand', agreedTOC: true };
        if(user.password===user.cPassword){
            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/signup`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                if(response?.data){
                    toast.success('Signup successful. Kindly verify your OTP');
                    setIsOtpModalOpen(true);
                }
                // Handle success response here (e.g., show a success message or redirect the user)
            } catch (error: any) {
                console.log('SignUp failed', error.response.data.message);
                toast.error(error.response.data.message);
            } finally {
                setLoading(false); // Set loading to false after the operation completes
            }
        }else{
            // toast.error()
        }
    
      
    };
    

    const handleVerifyOtp = async () => {
        setLoading(true);
       
      
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/verify`, { email: user.email, emailCode:otp});
            toast('OTP verified');
            console.log(response.data)
            if(response.data){
                toast.success(response.data.message);
                setIsOtpModalOpen(false);
                router.push('/login');
            }
           
        } catch (error:any) {
            toast.error(error.response.data.message);
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
            // document.getElementById(`input-${nextIndex}`).focus();
        }
    };
    const focusPrevInput = (currentIndex: any) => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            // document.getElementById(`input-${prevIndex}`).focus();
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
    return (
        <>
        <ToastContainer autoClose={10000}/>
            {isOtpModalOpen && <Modal isOpen={isOtpModalOpen} onClose={() => {
                
            }}>
                <div className={style.modal}>  <h3 className={style.heading}>OTP Verification</h3>
                    <div className={style.p}>Enter the verification code we just sent on your <br /><span>Email address & Phone Number</span></div>
                    <div className={`${style.p} mt-5`}><p><span>Enter the Email OTP</span></p></div>
                    <div className={style.input}>
                        {inputs.map((value, index) => (
                            <input
                                key={index}
                                id={`input-${index}`}
                                type="number" step='1'
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                className={value.length === 1 ? `${style.in} ${style.filled} ` : style.in}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onKeyPress={(e) => {
                                    if (e.key === '.') {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        ))}
                    </div>
                    <div className="my-12">
                        <button className={`${style.btn} bg-[#FFA86B]`} onClick={handleVerifyOtp}>Verify</button>
                        <button className={`${style.btn}`} onClick={()=>setIsOtpModalOpen(false)}>Cancel</button>
                    </div>
                    <div className={style.code}>Didn't Recieve Code? <span className="text-[#FFA86B] cursor-pointer" onClick={resend}>Resend</span></div></div>
            </Modal>}
            <div className="container login_section flex items-center justify-between max-w-[1280px] h-[100vh] m-auto max-md:justify-center">
                <div className="w-[621px] max-md:hidden">
                    <LoginDesign />
                </div>
                <div className="w-[507px]">
                    <h1 className="login_title">Sign UP</h1>
                    <p className="login_subtitle" >Earn from your content on your terms! <span>Sign up now!</span></p>
                    <div className="flex flex-col">
                        <div className="flex justify-between gap-[15px] mb-[15px]">
                            <div className="flex flex-col w-full">
                                <label className="brands_label" htmlFor="username">Name*</label>
                                <input className="brands_input"
                                    id="username"
                                    type="text"
                                    value={user.fullName}
                                    onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                                    placeholder="Enter Your name"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="brands_label" htmlFor="email">Email*</label>
                                <input className="brands_input"
                                    id="email"
                                    type="email"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    placeholder="Enter Your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-[15px]">
                            <label className="brands_label" htmlFor="phone">Phone Number*</label>
                            <input className="brands_input"
                                id="phone"
                                type="number"
                                value={user.phoneNumber}
                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                placeholder="Enter your mobie no."
                            />
                        </div>
                        <div className="flex justify-between gap-[15px] mb-[15px]">
                            <div className="flex flex-col w-full">
                                <label className="brands_label" htmlFor="passowrd">Password*</label>
                                <input className="brands_input"
                                    id="password"
                                    type="password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="brands_label" htmlFor="confirmpassword">Confirm Password*</label>
                                <input className="brands_input"
                                    id="confirmpassword"
                                    type="password"
                                    value={user.cPassword}
                                    onChange={(e) => setUser({ ...user, cPassword: e.target.value })}
                                    placeholder="Enter Password"
                                />
                            </div>
                        </div>
                        <button onClick={onSignup} className="login_button" disabled={buttonDisabled}>{loading ? "Sign Up Processing" : "Sign Up"}</button>
                        <div>
                            <span className="login_divider">Or</span>
                        </div>
                        <button className="continue_with_google flex justify-center items-center gap-[10px] text-[16px] leading-[21px] font-[500] rounded-[14px]" onClick={() => signIn('google')}>
                            <Image className="w-[21px] h-[21px]" src={"/icons/google-icon.svg"} alt="google icon" width={21} height={21} />
                            Continue with Google
                        </button>
                        <p className="text-[18px] leading-[21px] font-[500] mt-[20px] text-center">Do you have an account? <Link href={'/login'} className="text-[#FFA86B] font-[600] hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
