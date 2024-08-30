import { FC } from "react";

import styles from "./CardWithStep.module.scss";

export interface ICardWithStep {
  img: string;
  text: string;
  step: string;
}
const CardWithStep: FC<ICardWithStep> = ({ img, text, step }) => {
  return (
    <div className={styles.card}>
      <div className={styles.step}>{step}</div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CardWithStep;
