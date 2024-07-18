"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./new.module.css";
import CreatorList from "../creatorlist/page";
import InfluencerList from "@/src/components/influencerlist/InfluencerList";

export default function CreatorNewList() {
  const [influencer,showInfluecer]=useState(true)
  return (
    <>
      <main className="flex flex-col w-full ">
        <div className="p-6">
          <div className="">
            <button className={style.approved}>
              <span className="px-[5px] border-[1px] rounded-full border-black bg-white mr-[10px]">
                8
              </span>
              Requested
            </button>
            <button className={style.approved}>
              <span className="px-[5px] border-[1px] rounded-full border-black bg-white mr-[10px]">
                4
              </span>
              Approved
            </button>
            <button className={style.approved}>
              <span className="px-[5px] border-[1px] rounded-full border-black bg-white mr-[10px]">
                2
              </span>
              Completed
            </button>
          </div>
        </div>
        <div className="p-6 flex gap-6">
          <div className="w-[68%]">
            <InfluencerList />
          </div>
          <div className="w-[30%]">
            <CreatorList show={influencer}/>
          </div>
        </div>
      </main>
    </>
  );
}
