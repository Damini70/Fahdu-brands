"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CampaignDetails from "../campaigndetails/page";
import BrandsEnquiry from "@/src/components/brandenquiry/page";

export default function CampaignList() {
 const router = useRouter();

 
  function addCampaign() {
    router.push("/campaigndetails");
  }
  return (
    <>
        <div className="h-full mt-[130px]">
          <section className={`brands_enquiry_section new_brands_container`}>
            <div className="flex items-center justify-between w-full h-[76px] border-[2px] border-black rounded-[20px] bg-[#FFA86B] px-[64px] py-[28px]">
              <span className="table_head_item">Sr. No.</span>
              <span className="table_head_item">Campaign</span>
              <span className="table_head_item">Status</span>
              <span className="table_head_item">Brand Name</span>
              <span className="table_head_item">Created Date</span>
              <span className="table_head_item">Payment</span>
            </div>
            <div className="flex items-center justify-between w-full h-[76px] border-[2px] border-black rounded-[20px] px-[64px] py-[28px] mt-[31px]">
              {/* <span className="table_head_item">1.</span>
                    <span className="table_head_item">Maybelline 9 to 5</span>
                    <span className="table_head_item">Incomplete</span>
                    <span className="table_head_item">Maybelline</span>
                    <span className="table_head_item">20 June 2024</span>
                    <button className="table_camp_btn btn_paid text-[#33C330] rounded-[8px] border-[2px] w-[71px] h-[34px] border-[#33C330] bg-[#33C3300D]">Payment</button> */}
            </div>

            {/* add new campaign */}
            <div className="flex items-center justify-center w-full h-[76px] border-[2px] border-dashed border-black rounded-[20px] px-[64px] py-[28px] mt-[31px]">
              <span className="table_head_item" onClick={addCampaign}>
                + Add Campaign
              </span>
            </div>
          </section>
        </div>
    </>
  );
}
