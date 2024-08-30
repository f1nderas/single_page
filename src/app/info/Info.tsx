import { FC } from "react";

import styles from "./Info.module.scss";
const Info: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <p> ИНФОРМАЦИЯ НА САЙТЕ НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ</p>
          <p>
            Продавец услуг оставляет за собой право в любое время вносить
            какие-либо изменения в данные предложения без предварительного
            уведомления.
          </p>
          <p>
            Информация на сайте не является публичной офертой до момента заказа
            услуги. Изменения могут быть как существенными, так и
            незначительными. Однако было сделано все возможное, чтобы обеспечить
            точность подробных сведений..
          </p>
          <p>
            Данная информация ни при каких условиях не должна рассматриваться
            как предложение, сделанное Продавцом какому-либо лицу.
          </p>
          <p>
            Информация на сайте носит ознакомительный характер и следовательно к
            сожалению не всегда может отражать настоящую стоимость услуги.
            Несмотря на это мы прикладываем все усилия для размещения верной и
            правдивой информации.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
