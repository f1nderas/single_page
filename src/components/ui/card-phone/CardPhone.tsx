import { FC } from "react";

import styles from "./CardPhone.module.scss";
import { Phone } from "lucide-react";
import { BASE_URL } from "../../../constants/config.constant";

export interface ICardPhone {
  title: string;
  phone: string;
  linkPhone: string;
  img: string;
}
const CardPhone: FC<ICardPhone> = ({ title, phone, linkPhone, img }) => {
  const imageUrl = `${BASE_URL}/third/bg-phone.svg`;

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "right center",
      }}
    >
      <div className={styles.title}>{title}</div>
      <a className={styles.phone} href={`tel:${linkPhone}`}>
        <Phone /> {phone}
      </a>
      <img className={styles.img} src={img} alt="" />
    </div>
  );
};

export default CardPhone;
