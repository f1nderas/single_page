import { FC } from "react";

import styles from "./ServiceCard.module.scss";

interface ManufacturingProps {
  manufacturingFrom: number;
  manufacturingTo: number;
}
interface PriceProps {
  priceFrom: number;
  priceTo: number;
}
export interface IServiceCard {
  text: string;
  manufacturing: ManufacturingProps;
  price: PriceProps;
}
const ServiceCard: FC<IServiceCard> = ({ text, manufacturing, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>{text}</div>
      <div className={styles.bottom}>
        <div className={styles.manufacturing}>
          {manufacturing.manufacturingFrom} - {manufacturing.manufacturingTo}{" "}
          дня
        </div>
        <div className={styles.price}>
          {price.priceFrom} - {price.priceTo} &#8381;
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
