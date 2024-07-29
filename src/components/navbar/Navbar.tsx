/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  function onLogOut() {
    dispatch(logout());
    router.push("/login");
  }

  return (
    <>
      {
        <div
          className={`${style.new_br_navbar} new_brands_container p-auto m-auto flex justify-between`}
        >
          <div className="md:flex">
            <div className="md:mr-[10rem]">
              <img
                className={style.new_brands_icon}
                src="/images/logo.svg"
                alt="fahdu icon"
              />
            </div>
            <div className="flex gap-8 mt-[15px] content-center">
              <Link href="/brandenquiry">
                <p
                  className={`font-semibold text-[18px] ${
                    pathname === "/brandenquiry" ? "" : "text-[#707070]"
                  }`}
                >
                  Brand Enquiry
                </p>
              </Link>
              <Link href="/campaigndetails">
                <p
                  className={`font-semibold text-[18px] ${
                    pathname === "/campaigndetails" ? "" : "text-[#707070]"
                  }`}
                >
                  Campaign Details
                </p>
              </Link>
            </div>
          </div>
          <div>
            {user?.isLogged ? (
              <div className={`md:w-[15%] ${style.brands_details} md:ml-auto`}>
                {/* <h2 className={style.brands_username}>{user?.username}</h2> */}
                <img
                  className={style.brands_profile_img}
                  src={user?.image}
                  alt="user picture"
                  onClick={onLogOut}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      }
    </>
  );
}
