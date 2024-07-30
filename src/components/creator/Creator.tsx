import React from "react";
import style from "./Creator.module.css";
import Image from "next/image";

export default function Creator() {
  return (
    <>
      <div className={style.creatos_card_wrapper}>
        <div className={style.creators_card_item}>
          <div className={style.creators_card_top}>
            <Image
              className={style.creators_crc_dp}
              src={"images/alica.svg"}
              alt="profile"
            />
            <div className={style.creators_details_block}>
              <div className={style.creators_niche}>
                <span>Music & Dance</span>
              </div>
              <h2 className={style.crc_name}>Taylor Swift</h2>
              <div className={style.crc_username_wrapper}>
                <Image
                  className={style.crc_insta}
                  src={"/icons/instagram.svg"}
                  alt="insta icon"
                />
                <p className={style.crc_username}>taylorswift</p>
              </div>
              <div className={style.crc_pqs_wrapper}>
                <p className={style.crc_pqs_title}>PQS</p>
                <Image
                  className={style.crc_pqs_info}
                  src={"/icons/Group.svg"}
                  alt="info icon"
                />
                <p className={style.crc_pqs_rating}>
                  <span>67</span>/100
                </p>
              </div>
            </div>
          </div>
          <div className={style.creators_card_middle}>
            <div className={style.creators_card_middle_item}>
              <Image
                className={style.m_img}
                src={"/icons/cfol.svg"}
                alt="followers icon"
              />
              <span className={style.m_followers}>Followers</span>
              <h3 className={style.m_followers_count}>284.1M</h3>
            </div>
            <div className={style.creators_card_middle_item}>
              <Image
                className={style.m_img}
                src={"/icons/cviews.svg"}
                alt="followers icon"
              />
              <span className={style.m_followers}>Followers</span>
              <h3 className={style.m_followers_count}>284.1M</h3>
            </div>
            <div className={style.creators_card_middle_item}>
              <Image
                className={style.m_img}
                src={"/icons/cer.svg"}
                alt="followers icon"
              />
              <span className={style.m_followers}>Followers</span>
              <h3 className={style.m_followers_count}>284.1M</h3>
            </div>
          </div>
          <div className={style.creators_card_bottom}>
            <div className={style.creators_card_bottom_l}>
              {/* <Image className={style.m_country_icon} src="assets/icons/country_icon.svg" alt="country icon"/> */}
              <p className={style.m_country_name}>Singapore</p>
            </div>
            <div className={style.creators_card_bottom_r}>
              <Image
                className={style.m_creators_call}
                src={"/icons/cfol.svg"}
                alt="call icon"
              />
              <Image
                className={style.m_creators_email}
                src={"/icons/creators_mail.svg"}
                alt="mail icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
