import { FC } from "react";

import styles from "./First.module.scss";
import { Button } from "../../components/ui/Button";
import { BASE_URL } from "../../constants/config.constant";

const First: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Ремонт <span>ASUS</span> в Екатеринбурге любой сложности
            </h1>
            <div className={styles.text}>
              Ремонтируем устройства любой сложности в кратчайшие сроки с
              гарантией до 3 месяцев
            </div>
            <Button variant="link">Заказать ремонт</Button>
          </div>

          <div className={styles.right}>
            <img src={`${BASE_URL}/first/first.png`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
