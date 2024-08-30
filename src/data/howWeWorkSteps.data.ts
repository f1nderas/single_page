import { ICardWithStep } from "../components/ui/card-with-step/CardWithStep";
import { BASE_URL } from "../constants/config.constant";

export const howWeWorkSteps: ICardWithStep[] = [
  {
    img: `${BASE_URL}/third/1.png`,
    text: "Уточняем проблему и проводим диагностику",
    step: "01",
  },
  {
    img: `${BASE_URL}/third/2.png`,
    text: "Согласовываем цену и сроки ремонта",
    step: "02",
  },
  {
    img: `${BASE_URL}/third/3.png`,
    text: "Осуществляем ремонт",
    step: "03",
  },
  {
    img: `${BASE_URL}/third/4.png`,
    text: "Отдаем устройство с новыми деталями",
    step: "04",
  },
];
