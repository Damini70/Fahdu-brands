"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import CampaignList from "./campaignlist/page";
import BrandsEnquiry from "../components/brandenquiry/page";

export default function Home() {
  const [token, setToken] = useState("");
  const [allCampaign, setAllCampaign] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("login");
    if (user) {
      const data = JSON.parse(user);
      setToken(data.token);
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/campaign/feeds`,
          {
            headers: {
              "Content-Type": "application/json",
              // 'Authorization': `Bearer ${}`,
            },
          }
        );
        if (response?.data) {
          setAllCampaign(response?.data?.data?.campaigns);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {allCampaign.length > 0 ? <CampaignList /> : <BrandsEnquiry />}
    </>
  );
}
