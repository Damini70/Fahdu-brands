"use client"
import React,{useState,useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CampaignDetails from "../campaigndetails/page";


export default function CampaignList({ token }: { token: React.ReactNode }) {
  
    const [allCampaign,setAllCampaign]=useState([])
    const router=useRouter();

    useEffect(()=>{ 
       const fetchData=async()=>{
        console.log("toooooo",token)
            try{ const response= await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/campaign/feeds`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                if(response?.data){
                    setAllCampaign(response?.data?.data?.campaigns);
            }
           }catch(error){
                console.log(error)
             }};
        fetchData();
    },[])
    function addCampaign(){
        router.push('/campaigndetails')
      }
    return (
        <>
        <div className="h-full">
            {/* <Navbar /> */}
            <section className={`brands_enquiry_section new_brands_container`}>
                {allCampaign&& <><div className="flex items-center justify-between w-full h-[76px] border-[2px] border-black rounded-[20px] bg-[#FFA86B] px-[64px] py-[28px]">
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
                    
                </div></>}
              
               

                {/* add new campaign */}
                <div className="flex items-center justify-center w-full h-[76px] border-[2px] border-dashed border-black rounded-[20px] px-[64px] py-[28px] mt-[31px]">
                    <span className="table_head_item"  onClick={addCampaign}>+ Add Campaign</span>
                </div>
            </section>
        </div>
        </>
    )
}