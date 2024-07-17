/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { useRouter } from "next/navigation";

const getUserFromLocalStorage = () => {
  if (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  ) {
    const data = localStorage.getItem("login");

    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        localStorage.removeItem("login");
      }
    }
    return null;
  }
};
export default function Navbar() {
  const [user, setUser] = useState(getUserFromLocalStorage);
  const dispatch = useDispatch();
  const router = useRouter();

  function onLogOut() {
    dispatch(logout());
    router.push("/login");
  }

  console.log("user", user);

  return (
    <>
      {
        <div
          className={`${style.new_br_navbar} new_brands_container flex p-10 m-10`}
        >
          <div className="w-[20%]">
            <img
              className={style.new_brands_icon}
              src="/images/logo.svg"
              alt="fahdu icon"
            />
          </div>
          <div className="flex gap-8 mt-[15px] content-center">
            <Link href="/">
              <p className="font-semibold text-[18px] text-[#707070]">
                Brand Enquiry
              </p>
            </Link>
            <Link href="/creatornewlist">
              <p className="font-semibold text-[18px]">Campaign Details</p>
            </Link>
          </div>
          {user?.isLogged ? (
            <div className={`w-[15%] ${style.brands_details} ml-auto`}>
              <h2 className={style.brands_username}>{user?.username}</h2>
              <img
                className={style.brands_profile_img}
                src={user?.image}
                alt="user picture"
              />

              <button className={style.brands_logout_btn} onClick={onLogOut}>
                {/* <img src="/icons/ul-signout.svg" alt="logout icon"/> */}
                Logout
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      }
    </>
  );
}
