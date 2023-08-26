import React from "react";
import Image from "next/image";
import Styles from "./reusable.module.scss";

// Featured Image
// main Image
// Title
// Description
// count

export default function Single_Service({
  title,
  description,
  featured_img,
  avatar_img,
}: {
  title: string;
  description: string;
  featured_img: string;
  avatar_img: string;
}) {
  return (
    <div className={Styles.single_service_card}>
      <div className="img_container">
        <Image
          src={featured_img}
          width={500}
          height={500}
          alt="Featured_ img"
          className={Styles.featured_img}
        />
      </div>
      <div className={Styles.avatar_container}>
        <div>
          <Image
            src={avatar_img}
            width={200}
            height={300}
            alt="Featured_ img"
          />
        </div>
      </div>
      <div className={Styles.card_content}>
        <h4> {title} </h4>
        <p> {description} </p>
      </div>
    </div>
  );
}
