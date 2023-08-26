import React from "react";
import Styles from "../global_styles/main.module.scss";

export default function Section_title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <div className="container mx-auto max-w-7xl  px-5 py-10">
        <div className="flex justify-between ">
          <div className="title">
            <h2> {title} </h2>
            <small> {subtitle} </small>
          </div>
          {/* <div className="external_link pt-7 relative">
            <a href="#" className={Styles.title_link}>
              Explore More
            </a>
            <div className={Styles.divider}></div>
          </div> */}
        </div>
      </div>
    </>
  );
}
