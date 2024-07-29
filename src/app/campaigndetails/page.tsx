/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import style from "./campaigndetails.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/navbar/Navbar";

let user: any;
if (window !== undefined) {
  user = localStorage.getItem("login");
}
const influencerCategory = [
  "Nano (1K - 10K)",
  "Micro (10K - 50K)",
  "Mid Tier(50K to 100K)",
  "Macro (100K to 500K)",
  "Celeb ( 500k+ )",
];
export default function CampaignDetails() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();
  const router = useRouter();
  const [token, setToken] = useState("");
  const watchFile = watch("brandsLogo");

  useEffect(() => {
    if (user !== null) {
      const data = JSON.parse(user);
      setToken(data.token);
    }
  }, []);

  // const onSubmit = async (data: any) => {
  //   const formData = new FormData();
  //   formData.append("file", watchFile[0]);

  //   try {
  //     const uploadImage = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (uploadImage?.data) {
  //       const logoUrl = uploadImage?.data?.data?.url;
  //       const campaignDetails = {
  //         campTitle: data.title,
  //         campDescription: data.brandDescription,
  //         campaignObjective: data.campaignObjective,
  //         creatorInterest: data.creatorInterest,
  //         influencerRange: data.influencerCategory,
  //         hashtags: data.hashtags,
  //         rules: data.dosAndDonts,
  //         campaignOverview: data.campaignOverview,
  //         deliverables: [data.deliverables],
  //         brandImage: logoUrl,
  //         creatorCount: [data.creatorCount],
  //         specificMention: data.specificMentions,
  //         impKeywords: data.importantKeywords,
  //         category: "CASH",
  //       };
  //       const campaignResponse = await axios.post(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/campaign/create`,
  //         campaignDetails,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (campaignResponse?.data) {
  //         toast.success("Brand created successfully");
  //         router.push("/creatornewlist");
  //       }
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     toast.error(error?.response?.data?.message);
  //   } finally {
  //   }
  // };

  const onSubmit = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: "I am in love with someone.",
        userId: 5,
      });
      if (response) {
        router.push("/creatornewlist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer autoClose={10000} />

      <div className={style.brands_p_section}>
        <div className={`${style.brands_enquiry_section} new_brands_container`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`brands_form_title mb-9`}>Campaign Details</h2>
            <input
              {...register("title", { required: "Title is required" })}
              className="brands_input brands_enquiry_section"
              type="text"
              placeholder="Campaign title"
            />
            <textarea
              {...register("brandDescription", { required: true })}
              className={`brands_enquiry_textarea ${style.brands_input} brands_enquiry_section`}
              placeholder="Campaign Description"
            />

            <input
              {...register("creatorInterest", {
                required: "Creator Interest is required",
              })}
              className="brands_input"
              type="text"
              placeholder="Creator Interest*"
            />
            <div style={{ position: "relative" }}>
              <select
                {...register("campaignObjective", {
                  required: "Campaign Objective is required",
                })}
                className="brands_input campaign_obj"
                style={{ width: "100%" }}
              >
                <option value="">Objective of the Campaign</option>
                <option value="Brand Awareness(Reach)">
                  Brand Awareness (Reach)
                </option>
                <option value="Conversion(ROI)">Conversion (ROI)</option>
              </select>
            </div>

            <textarea
              {...register("hashtags", { required: true })}
              className={`brands_enquiry_textarea ${style.brands_input} brands_enquiry_section`}
              placeholder="Hashtags (List All hashtags to be used)"
            />

            <textarea
              {...register("dosAndDonts", { required: true })}
              className={`brands_enquiry_textarea ${style.brands_input} brands_enquiry_section`}
              placeholder="Do’s & Don’ts (Campaign guidelines for Creators)"
            />

            <textarea
              {...register("campaignOverview", { required: true })}
              className={`brands_enquiry_textarea ${style.brands_input} brands_enquiry_section`}
              placeholder="Campaign Overview (Brief description of what the campaign Details)"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={`brands_enquiry_file brands_input`}>
                <select {...register("deliverables", { required: true })}>
                  <option value="">Deliverables</option>
                  <option value="Story">Story</option>
                  <option value="Static Post">Static Post</option>
                  <option value="Reel">Reel</option>
                </select>
              </div>

              <div className={`brands_enquiry_file brands_input`}>
                <div className={`${style.choose_file_block}`}>
                  <img src={"icons/brands-add-logo.svg"} alt="add file icon" />
                  <input
                    className={style.drag_drop_input}
                    type="file"
                    {...register("brandsLogo", {
                      required: true,
                      validate: {
                        checkFileSize: (value) => {
                          return (
                            (value &&
                              value[0] &&
                              value[0].size <= 15 * 1024 * 1024) ||
                            toast.error("Image size should not exceed 15 MB")
                          );
                        },
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            <div className={`brands_enquiry_file brands_input`}>
              <select {...register("creatorCount", { required: true })}>
                <option value="">
                  Select Creators count for the collaboration
                </option>
                <option value="10 Creators">10 Creators</option>
                <option value="20 Creators">20 Creators</option>
                <option value="50 Creators">50 Creators</option>
                <option value="100 Creators">100 Creators</option>
                <option value="100+ Creators or Custom">
                  100+ Creators or Custom
                </option>
              </select>
            </div>

            <textarea
              {...register("specificMentions", { required: true })}
              className="brands_enquiry_textarea brands_input"
              placeholder="Specific Mentions required during the Campaign*"
            />

            <textarea
              {...register("importantKeywords", { required: true })}
              className="brands_enquiry_textarea brands_input"
              placeholder="Important Keywords for the Campaign*"
            />

            <button type="submit" className="login_button">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
