/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import icon from "../../../public/images/Icon.png";
import icon1 from "../../../public/images/Icon1.png";
import icon2 from "../../../public/images/icon2.png";
import icon3 from "../../../public/images/Icon3.png";
import vector from "../../../public/images/Vector.png";
import Chart from "../../components/chart/Chart.js";
import Chart1 from "../../components/chart/Chart1.js";
import Chart3 from "../../components/chart/Chart3.js";
import Chart4 from "../../components/chart/Chart4.js";
import Image from "next/image";
import style from "./insight.module.css";

export default function Insights() {
  function getDataFromLocalstorage() {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      const data = localStorage.getItem("login");
      if (data) {
        return JSON.parse(data);
      }
    }
  }
  const [data, setData] = useState(getDataFromLocalstorage);
  return (
    <div className="flex h-screen">
      <div
        className={`${style.sidebar} w-[20%] p-6 font-semibold flex flex-col justify-between`}
      >
        <div className="flex flex-col flex-grow">
          <div className="flex justify-center p-3">
            {" "}
            <Image
              src={logo}
              alt="logo"
              style={{ width: "149px", height: "42px" }}
            />
          </div>
          <div className="mt-7">
            <p className="flex ml-3px my-4">
              {" "}
              <Image
                src={icon1}
                alt="profile"
                style={{ width: "22px", height: "20px" }}
              />
              <span className="ml-5">Profile</span>
            </p>
            <p className="flex ml-3px my-4">
              <Image
                src={icon}
                alt="audience"
                style={{ width: "22px", height: "20px" }}
              />
              <span className="ml-5">Audience</span>
            </p>
            <p className="flex ml-3px my-4">
              <Image
                src={icon2}
                alt="engage"
                style={{ width: "22px", height: "20px" }}
              />
              <span className="ml-5">Engagement</span>
            </p>
            <p className="flex ml-3px my-4">
              {" "}
              <Image
                src={icon3}
                alt="activity"
                style={{ width: "22px", height: "20px" }}
              />
              <span className="ml-5">Posting Activity</span>
            </p>
            <p className="flex ml-3px my-4">
              {" "}
              <Image
                src={vector}
                alt="mentions"
                style={{ width: "22px", height: "20px" }}
              />
              <span className="ml-5"> Mentions</span>
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[14.9rem]">
          <div>
            {" "}
            <img
              src={data?.image}
              alt="username"
              style={{
                width: "36px",
                height: "36px",
              }}
              className="rounded-3xl"
            />
          </div>
          <p className="ml-3 font-semibold">{data?.username}</p>
        </div>
      </div>
      <div className="w-[80%] p-4">
        <div className="flex gap-2">
          {" "}
          <Chart />
          <Chart1 />
        </div>
        <div className="flex my-2">
          <div>
            <Chart3 />
          </div>
          <div>
            <Chart4 title="Engagement rate" />
            <Chart4 title="Cumulative Follower" />
          </div>
        </div>
      </div>
    </div>
  );
}
