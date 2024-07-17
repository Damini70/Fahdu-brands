"use client";
import React, { useState, useEffect } from "react";
import style from "./brandenquiry.module.css";
import "../../components/navbar/Navbar";
import Navbar from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const user = localStorage.getItem("login");

export default function BrandsEnquiry() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState("");
  const [logo, setLogo] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();
  const watchFile = watch("brandLogo");

  useEffect(() => {
    if (user !== null) {
      const data = JSON.parse(user);
      setToken(data.token);
    }
  }, []);
  useEffect(() => {
    if (watchFile?.length >= 1) {
      setLogo(URL.createObjectURL(watchFile[0]));
    }
  }, [watchFile]);

  // const onSubmit = async (data: any) => {
  //   const formData = new FormData();
  //   formData.append("file", watchFile[0]);

  //   setLoading(true);
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
  //       const updatedDetails = {
  //         brandName: data.username,
  //         instaHandle: data.instagramHandle,
  //         campaignObjective: data.campaignObjective,
  //         brandDescription: data.brandDescription,
  //         loc: data.location,
  //         influencerRange: data.influencerCategory,
  //         creatorInterest: data.creatorInterest,
  //         logoimage: logoUrl,
  //         keyName: "Damini",
  //       };

  //       const enquiryResponse = await axios.post(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/enquiry/create`,
  //         updatedDetails,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (enquiryResponse?.data) {
  //         toast.success("Brand created successfully");
  //         router.push("/campaigndetails");
  //       }
  //     }
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message);
  //   } finally {
  //     setLoading(false); // Set loading to false after the operation completes
  //   }
  // };

  const onSubmit = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: "I am in love with someone.",
        userId: 5,
      });
      if (response) {
        router.push('/campaigndetails')
      }
    } catch (err) {
      toast.error("Some error occur");
    }
  };

  return (
    <>
      <ToastContainer autoClose={6000} />
      <Navbar />
      <div className={style.brands_p_section}>
        <div className={`${style.brands_enquiry_section} new_brands_container`}>
          <h2 className="brands_form_title">Brand</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              <input
                {...register("username", { required: "Username is required" })}
                className="brands_input"
                type="text"
                placeholder="Username*"
              />
              <input
                {...register("location", { required: "Location is required" })}
                className="brands_input"
                type="text"
                placeholder="Enter Location"
              />
            </div>

            <textarea
              {...register("brandDescription", {
                required: "Brand Description is required",
              })}
              className={`brands_enquiry_textarea ${style.brands_input}`}
              placeholder="Brand Description*"
            />

            <div
              className={`brands_enquiry_file brands_input`}
              style={{ position: "relative" }}
            >
              <div className={`${style.choose_file_block} choose_file_block`}>
                <img src="/icons/brands-add-logo.svg" alt="add file icon" />
                <p className={`file_text`}>Drag & Drop Brand Logo</p>
                <span className="file_divider">or</span>
                <div>
                  <input
                    {...register("brandLogo", {
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
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/gif"
                  />
                  {watchFile?.length >= 1 && logo ? <img src={logo} /> : <></>}
                </div>
              </div>
            </div>
            <button type="submit" className="login_button">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
