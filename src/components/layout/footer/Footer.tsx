import { FC } from "react";

import styles from "./Footer.module.scss";
import { BASE_URL } from "../../../constants/config.constant";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";
const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper_up}>
        <div className="container mx-auto">
          <div className={styles.inner}>
            <div className={styles.logo}>
              <img src={`${BASE_URL}/logo.png`} alt="" />
            </div>
            <div className={styles.nav}>
              <Link className={styles.nav_item} to="/">
                Наши услуги
              </Link>
              <Link className={styles.nav_item} to="/">
                Бренды
              </Link>
              <Link className={styles.nav_item} to="/">
                Отзывы
              </Link>
            </div>
            <div className={styles.phone}>
              <a href="tel:+83433112111" className={styles.phone_link}>
                +8 (343) 311-21-11
              </a>
              <Button>Перезвонить мне</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_down}>
        <div className="container mx-auto">
          <div className={styles.inner}>
            <div>Copyright 2020. Все права защищены</div>
            <div>Дизайн, разработка, реклама by Axmobi 8961-098-81-11</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
