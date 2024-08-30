import { FC } from "react";

import styles from "./Second.module.scss";
import { BASE_URL } from "../../constants/config.constant";
const Second: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.img}>
              <img src={`${BASE_URL}/second/1.png`} alt="" />
            </div>
            <div className={styles.text}>Ремонт и консультация на месте</div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <img src={`${BASE_URL}/second/2.png`} alt="" />
            </div>
            <div className={styles.text}>Нет скрытых платежей и переплат</div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <img src={`${BASE_URL}/second/3.png`} alt="" />
            </div>
            <div className={styles.text}>Собственный склад запчастей</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
