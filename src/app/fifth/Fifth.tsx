import { FC } from "react";

import styles from "./Fifth.module.scss";
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
const Fifth: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <div className={styles.title}>
            Заберем ваш сломанный смартфон прямо из дома
          </div>
          <div className={styles.subtitle}>
            Оставьте Ваш номер телефона и мы перезвоним <br /> Вам{" "}
            <span>прямо сейчас.</span>
          </div>
          <form className={styles.form}>
            <Input type="text" placeholder="Имя" />
            <Input type="tel" placeholder="+7 --- --- -- --" />
            <Button variant="link">Перезвонить мне</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
