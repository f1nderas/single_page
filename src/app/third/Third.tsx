import { FC, useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";

import styles from "./Third.module.scss";
import { Select } from "../../components/ui/Select";
import { howWeWorkSteps } from "../../data/howWeWorkSteps.data";
import CardWithStep from "../../components/ui/card-with-step/CardWithStep";
import { selectOptions } from "../../data/selectOptions.data";
import { modelCards } from "../../data/modelCard.data";
import ModelCard from "../../components/ui/model-card/ModelCard";
import { serviceCards } from "../../data/services.data";
import ServiceCard from "../../components/ui/service-card/ServiceCard";
import CardLink from "../../components/ui/card-link/CardLink";
import { BASE_URL } from "../../constants/config.constant";
import CardPhone from "../../components/ui/card-phone/CardPhone";
import { Banner } from "../../components/ui/banner/Banner";

const Third: FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 648) {
        setVisibleProducts(4);
      } else {
        setVisibleProducts(8);
      }
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  const bgImg = `${BASE_URL}/third/bg-third.svg`;

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className={styles.inner}>
          <h2 className={styles.title}>Как мы работаем?</h2>
          <div className={styles.list}>
            {howWeWorkSteps.map((props) => (
              <CardWithStep key={props.text} {...props} />
            ))}
          </div>
          <div className={styles.search}>
            <div className={styles.text}>поиск модели</div>
            <Select options={selectOptions} />
            <Button variant="link">Поиск</Button>
          </div>
          <h2 className={styles.title}>Выберите модель</h2>
          <div className={styles.subtitle}>Выберите свою модель</div>
          <div className={styles.model_list}>
            {modelCards.slice(0, visibleProducts).map((props, index) => (
              <ModelCard {...props} key={index} />
            ))}
          </div>
          {visibleProducts < modelCards.length && (
            <Button
              className="mx-auto mb-[100px]"
              variant="link"
              onClick={showMoreProducts}
            >
              Показать еще
            </Button>
          )}
          <h2 className={styles.title}>Наши услуги</h2>
          <div className={styles.subtitle}>
            Мы сможем отремонтировать любой вид техники, вот наиболее часто
            заказываемые у нас услуги
          </div>
          <div className={styles.services}>
            {serviceCards.map((props, index) => (
              <ServiceCard {...props} key={index} />
            ))}
          </div>
          <div className={styles.help}>
            <CardLink
              title="Слишком сильные повреждения?"
              text="Сдайте ваше устройство на запчасти обратившись в наш сервис"
              linkText="Разобрать на запчасти"
              link="#"
              img={`${BASE_URL}/third/help.png`}
            />
            <CardPhone
              title="Ознакомится с более точными ценами"
              phone="89610988111"
              linkPhone="89610988111"
              img={`${BASE_URL}/third/phone.png`}
            />
          </div>
          <Banner
            title="Покупайте запчасти онлайн"
            subtitle="Комплектующие на различные девайсы прямо со склада"
            linkText="Посмотреть"
            linkUrl="#"
            imageUrl={`${BASE_URL}/third/banner.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default Third;
