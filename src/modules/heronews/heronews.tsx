"use client";

import { FC } from "react";
import heroImgDsktop from "@/assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "@/assets/images/image-web-3-mobile.jpg";
import { AdaptiveImage, Button } from "@/components";
import styles from "./heronews.module.sass";

export const Heronews: FC = () => {
  return (
    <section className={styles.main}>
      <AdaptiveImage
        alt="hero"
        breakpoint={428}
        desktopImage={heroImgDsktop}
        mobileImage={heroImgMobile}
        sizes="100vw"
        priority
        fill={false}
        style={{ objectFit: "cover" }}
        className={styles.cover}
      />

      <div className={styles.wrapper}>
        <h1 className={styles.header}>The Bright Future of Web 3.0?</h1>

        <div className={styles.description}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button action={() => {}} text="Read more" />
        </div>
      </div>
    </section>
  );
};
