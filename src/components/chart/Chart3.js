import React from "react";
import design from "./chart3.module.css";
import style from "./chart1.module.css";
import Image from "next/image";
import img from "../../../public/images/Icon.png";
import trophy from "../../../public/icons/trophy.svg";
import star from "../../../public/icons/star.svg";

export default function Chart3() {
  return (
    <div className={`${design.win} p-3 px-4`}>
      <h2 className="text-l font-semibold">PROFILE QUALITY</h2>
      <div>
        <div className="flex  my-2 border-2 p-2 rounded-xl border-black">
          <div className={`${design.trophy} w-[120px] h-auto bg-[#FBFBFB] p-2`}>
            <Image src={trophy} alt="trophy" className="w-[82px] h-[83.85px]" />
          </div>
          <div className={design.detail}>
            <p className="text-xl">
              <span className="text-3xl font-semibold">92</span>/100
            </p>
            <span className="font-semibold">Excellent</span>
            <span>
              {" "}
              <Image src={star} alt="star" />
            </span>
          </div>
        </div>
        <div className={`${design.cont} flex  p-[3px]`}>
          <div className={`${design.img} bg-[#FFF3EB]`}>
            <Image src={img} alt="people" className="w-[21px] h-[19px]" />
          </div>
          <div className="flex justify-between">
            {" "}
            <div className="mr-8">
              <p className="text-xs font-semibold">Followers</p>
              <span className="text-xs font-semibold">Rate</span>
            </div>
            <div className={style.text}>
              <span className={`${style.text} text-sm p-2`}>
                -0.91% this month
              </span>
            </div>
          </div>
        </div>
        <div className={`${design.cont} flex  p-1`}>
          <div className={`${design.img} bg-[#FFF3EB]`}>
            <Image src={img} alt="people" className="w-[21px] h-[19px]" />
          </div>
          <div className="flex justify-between">
            {" "}
            <div className="mr-8">
              <p className="text-xs font-semibold">Followers</p>
              <span className="text-xs font-semibold">Effective</span>
            </div>
            <div className={style.text}>
              <span className={`${style.text} text-sm p-2`}>
                -0.91% this month
              </span>
            </div>
          </div>
        </div>
        <div className={`${design.cont} flex  p-1`}>
          <div className={`${design.img} bg-[#FFF3EB]`}>
            <Image src={img} alt="people" className="w-[21px] h-[19px]" />
          </div>
          <div className="flex justify-between">
            {" "}
            <div className="mr-8">
              <p className="text-xs font-semibold">Followers</p>
              <span className="text-xs font-semibold">Consist</span>
            </div>
            <div className={style.text}>
              <span className={`${style.text} text-sm p-2`}>
                -0.91% this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
