import { FC } from "react";

import styles from "./Banner.module.scss";
import { BASE_URL } from "../../../constants/config.constant";
interface BannerProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
}
const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  linkText,
  linkUrl,
  imageUrl,
}) => {
  const imgUrl = `${BASE_URL}/third/bg-banner.png`;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.line}
        style={{
          clipPath: "polygon(0px 0px, 47% 0px, 61% 100%, 0% 100%)",
          backgroundColor: "#333",
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <a className={styles.link} href={linkUrl}>
          {linkText} <img src={`${BASE_URL}/arrow.svg`} alt="" />
        </a>
      </div>
      <div className={styles.right}>
        <img className={styles.img} src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export { Banner };
