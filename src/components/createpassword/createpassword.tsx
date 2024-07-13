"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";


export default function CreateNewPassword({email}:any) {
    const router = useRouter();
    // loading
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = useState({
      email: email,
      newPassword: '',
      cPassword: ''
    })

    const onSubmit = async () => {
        setLoading(true);
        const data = {...user}
        if(user.newPassword === user.cPassword) {
            try {
                const response  = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/update-password`,
                    data, 
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                if(response?.data) {
                    toast.success('Password updated')
                    router.push('/login');
                }
            } catch (error: any) {
                toast.error(error.response.data.message);
            } finally {
                setLoading(false)
            }
        } else {
          toast
        }
    }

    return (
        <>
        <div className="w-[507px]">
          <h1 className="login_title">Create New Password</h1>
          <p className="login_subtitle">Your new password must be unique.</p>
          <div className="flex flex-col">
            <div className="flex flex-col w-full mb-[15px]">
              <label className="brands_label" htmlFor="phone">
                Password*
              </label>
              <input
                className="brands_input"
                id="password"
                type="password"
                value={user.newPassword}
                onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col w-full mb-[15px]">
              <label className="brands_label" htmlFor="phone">
                Confirm Password*
              </label>
              <input
                className="brands_input"
                id="password"
                type="password"
                value={user.cPassword}
                onChange={(e) => setUser({ ...user, cPassword: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <button onClick={onSubmit} className="login_button">Reset Password</button>
          </div>
        </div>
        </>
    )
}