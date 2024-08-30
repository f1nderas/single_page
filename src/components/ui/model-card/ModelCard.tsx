import { FC } from "react";

import styles from "./ModelCard.module.scss";

export interface IModelCard {
  text: string;
  img: string;
}
const ModelCard: FC<IModelCard> = ({ text, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>{text}</div>
      <img className={styles.img} src={img} alt="" />
    </div>
  );
};

export default ModelCard;
