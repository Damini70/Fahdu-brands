/* eslint-disable @next/next/no-img-element */
import style from "../creator/Creator.module.css";
import img from "../../../public/icons/Group.png";
import Image from "next/image";
function Chart() {
  return (
    <div
      className={`${style.card} p-4 w-auto h-[256px] rounded-3xl border-2 border-black bg-[#FFF9F5]`}
    >
      <div>
        <p className="font-semibold m-2">PERSONAL INFORMATION</p>
        <div className="flex ml-2 mt-4">
          <div>
            {" "}
            <img
              src={"images/alica.svg"}
              alt="profile"
              className="rounded-xl w-[156px] h-[156px]"
            />
          </div>
          <div className="card-body ml-6 mt-3">
            <div className={`${style.creators_niche} w-[113px]`}>
              <span>Music & Dance</span>
            </div>
            <p className="font-semibold my-2 text-l">Sonal M Prabhakar</p>
            <Image src={img} alt="grp" />
            <div className={style.crc_pqs_wrapper}>
              <p className={`${style.crc_pqs_title} my-3 text-sm`}>PQS</p>
              <img
                className={`${style.crc_pqs_info} w-[104px] h-[22px]`}
                src={"/icons/Group.svg"}
                alt="info icon"
              />
              <p className={style.crc_pqs_rating}>
                <span>67</span>/100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
