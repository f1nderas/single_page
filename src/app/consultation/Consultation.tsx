import { FC } from "react";

import styles from "./Consultation.module.scss";
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
const Consultation: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <div className={styles.title}>Нужна консультация?</div>
          <div className={styles.subtitle}>
            Оставьте Ваш номер телефона и запишем вас на <br /> бесплатную
            консультацию.
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

export default Consultation;
