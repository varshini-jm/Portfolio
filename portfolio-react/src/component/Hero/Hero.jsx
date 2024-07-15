import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Varshini JM</h1>
        <p className={styles.description}>
        Passionate developer | Open-source enthusiast | Tech geek 🚀 | Building cool stuff with code 💻 | Contributing to the future of software 🌟
        </p>
        <a href="https://www.linkedin.com/in/varshini-j-m-114699212" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
