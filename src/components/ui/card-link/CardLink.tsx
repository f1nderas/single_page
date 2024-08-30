import { FC } from "react";

import styles from "./CardLink.module.scss";
import { BASE_URL } from "../../../constants/config.constant";

export interface ICardLink {
  title: string;
  text: string;
  linkText: string;
  link: string;
  img: string;
}
const CardLink: FC<ICardLink> = ({ title, text, linkText, link, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <a className={styles.link} href={link}>
        {linkText} <img src={`${BASE_URL}/arrow.svg`} alt="" />
      </a>
      <img className={styles.img} src={img} alt="" />
    </div>
  );
};

export default CardLink;
