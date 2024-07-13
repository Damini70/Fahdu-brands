'use client'

import React,{useEffect,useState} from "react";
import Navbar from "../components/navbar/Navbar";
import CampaignList from "./campaignlist/page";

export default function Home() {
  const [token,setToken]=useState('');
  useEffect(()=>{
    const user=localStorage.getItem('login');
    if (user) {
      const data = JSON.parse(user);
      setToken(data.token);
  }
  },[])
  console.log("token",token)
  return (
  <>
  <Navbar/>
  {token&&<CampaignList token={token}/>}
  </>
  );
}
