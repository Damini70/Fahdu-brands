import React from "react";
import Image from "next/image";
import style from "./influencerList.module.css";
import { useRouter } from "next/navigation";

export default function InfluencerList() {
  const router = useRouter();
  function addCampaign() {
    router.push("/campaigndetails");
  }
  return (
    <>
      <div className={style.data}>
        <table className="w-full">
          <thead>
            <tr className="flex items-center m-[20px] h-[56px] border-2 border-[#000] bg-[#FFA86B] px-[20px] py-[5px] rounded-[15px]">
              <th className="w-[15%]">Username</th>
              <th className="w-[20%]">Reach</th>
              <th className="w-[30%]">Followers</th>
              <th className="w-[30%]">Engagement</th>
              <th className="w-[30%]">Ratings</th>
              <th className="w-[12%]">Insights</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.bottomline}>
              <td className="w-[15%]">Komal</td>
              <td className="w-[20%] tdata text-center">89</td>
              <td className="w-[30%] tdata text-center">10K</td>
              <td className="w-[30%] tdata text-center">89%</td>
              <td className="w-[30%] tdata text-center">4/5</td>
              <td className="w-[12%] h-[34px] flex border-2 bg-[#FFEDE0] border-[#FFA86B] gap-1 rounded-[8px] justify-center items-center">
                <span className="text-[#4BAE4F] text-[14px]">View</span>
                <Image src="/images/view.svg" width={11} height={8} alt="" />
              </td>
            </tr>
            <tr className={style.bottomline}>
              <td className="w-[15%]">Komal</td>
              <td className="w-[20%] tdata text-center">89</td>
              <td className="w-[30%] tdata text-center">10K</td>
              <td className="w-[30%] tdata text-center">89%</td>
              <td className="w-[30%] tdata text-center">4/5</td>
              <td className="w-[12%] h-[34px] flex border-2 bg-[#FFEDE0] border-[#FFA86B] gap-1 rounded-[8px] justify-center items-center">
                <span className="text-[#4BAE4F] text-[14px]">View</span>
                <Image src="/images/view.svg" width={11} height={8} alt="" />
              </td>
            </tr>
            <tr className={style.bottomline}>
              <td className="w-[15%]">Komal</td>
              <td className="w-[20%] tdata text-center">89</td>
              <td className="w-[30%] tdata text-center">10K</td>
              <td className="w-[30%] tdata text-center">89%</td>
              <td className="w-[30%] tdata text-center">4/5</td>
              <td className="w-[12%] h-[34px] flex border-2 bg-[#FFEDE0] border-[#FFA86B] gap-1 rounded-[8px] justify-center items-center">
                <span className="text-[#4BAE4F] text-[14px]">View</span>
                <Image src="/images/view.svg" width={11} height={8} alt="" />
              </td>
            </tr>
            <tr className={style.bottomline}>
              <td className="w-[15%]">Komal</td>
              <td className="w-[20%] tdata text-center">89</td>
              <td className="w-[30%] tdata text-center">10K</td>
              <td className="w-[30%] tdata text-center">89%</td>
              <td className="w-[30%] tdata text-center">4/5</td>
              <td className="w-[12%] h-[34px] flex border-2 bg-[#FFEDE0] border-[#FFA86B] gap-1 rounded-[8px] justify-center items-center">
                <span className="text-[#4BAE4F] text-[14px]">View</span>
                <Image src="/images/view.svg" width={11} height={8} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
