import React from "react";
import Styles from "./profile.module.scss";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../../../../images/icons/instagram.png";
import Facebook from "../../../../images/icons/facebook.png";
import Twitter from "../../../../images/icons/twitter.png";
import Telegram from "../../../../images/icons/telegram.png";

type HeaderProps = {
  Name: string;
  Description: string;
  Profile_image: string;
  Featured_image: string;
  Instagram?: string;
  Facebook?: string;
  Twitter?: string;
  Telegram?: string;
};

export default function ProfileHeader(props: HeaderProps) {
  return (
    <>
      <div
        id={Styles.profile_header}
        className="container max-w-7xl m-auto shadow-md "
      >
        <div className={Styles.FI_container}>
          <Image
            className={Styles.featured_img}
            src={props.Featured_image}
            alt="featured_img"
            width={1600}
            height={300}
          />
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-12 p-10">
          <div className="profile_data sm:col-span-12 md:col-span-8  col-span-12">
            <div className="grid  gap-3 xl:gap-0 grid-cols-12 ">
              <div
                className={` col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-5 ${Styles.profile_image}`}
              >
                <Image
                  src={props.Profile_image}
                  width={280}
                  height={280}
                  alt="Profile_avatar"
                />
              </div>
              <div className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-6 ">
                <h2 className="profile_name"> {props.Name}</h2>
                <p className="profile_description"> {props.Description}</p>
              </div>
            </div>
          </div>
          <div className=" mt-0 md:mt-0 lg:justify-self-end sm:col-span-12 md:col-span-4 col-span-12">
            <div className={Styles.socials}>
              {props.Instagram && (
                <Link href={props.Instagram} target="_blank">
                  <Image
                    src={Instagram}
                    width={50}
                    height={50}
                    alt="Instagram"
                  />
                </Link>
              )}
              {props.Facebook && (
                <Link href={props.Facebook} target="_blank">
                  <Image src={Facebook} width={50} height={50} alt="Facebook" />
                </Link>
              )}
              {props.Twitter && (
                <Link href={props.Twitter} target="_blank">
                  <Image src={Twitter} width={50} height={50} alt="Twitter" />
                </Link>
              )}
              {props.Telegram && (
                <Link href={props.Telegram} target="_blank">
                  <Image src={Telegram} width={50} height={50} alt="Telegram" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
