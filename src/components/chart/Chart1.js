import React from "react";
import img from "../../../public/images/Icon.png";
import Image from "next/image";
import style from "./chart.module.css";

export default function Chart1() {
  return (
    <div className={`${style.c}`}>
      <h2 className="text-l font-semibold">SOCIAL STATISTICS</h2>
      <div className=" my-3">
        <div className="flex gap-2">
          <div className={`${style.cont} flex p-2`}>
            <div className={`${style.img} bg-[#FFF3EB]`}>
              <Image src={img} alt="people" className="w-[21px] h-[19px]" />
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="mr-8">
                <p className="font-semibold text-xs">Followers</p>
                <span className="font-semibold text-xl">284.1M</span>
              </div>
              <div className={style.text}>
                <span className={`${style.text} text-sm`}>
                  -0.91% this month
                </span>
              </div>
            </div>
          </div>
          <div className={`${style.cont} flex  p-2`}>
            <div className={`${style.img} bg-[#FFF3EB]`}>
              <Image src={img} alt="people" className="w-[21px] h-[19px]" />
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="mr-8">
                <p className="text-xs font-semibold">Followers</p>
                <span className="font-semibold text-xl">284.1M</span>
              </div>
              <div className={style.text}>
                <span className={`${style.text} text-sm`}>
                  -0.91% this month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          {" "}
          <div className={`${style.cont} flex  p-2`}>
            <div className={`${style.img} bg-[#FFF3EB]`}>
              <Image src={img} alt="people" className="w-[21px] h-[19px]" />
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="mr-8">
                <p className="text-xs font-semibold">Followers</p>
                <span className="font-semibold text-xl">284.1M</span>
              </div>
              <div className={style.text}>
                <span className={`${style.text} text-sm`}>
                  -0.91% this month
                </span>
              </div>
            </div>
          </div>
          <div className={`${style.cont} flex  p-2`}>
            <div className={`${style.img} bg-[#FFF3EB]`}>
              <Image src={img} alt="people" className="w-[21px] h-[19px]" />
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="mr-8">
                <p className="text-xs font-semibold">Followers</p>
                <span className="font-semibold text-xl">284.1M</span>
              </div>
              <div className={style.text}>
                <span className={`text-sm`}>-0.91% this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
