import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";
import { BASE_URL } from "../../../constants/config.constant";
import { Phone } from "lucide-react";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.inner}>
          <div className={styles.burger}>
            <button className="focus:outline-none" onClick={toggleMenu}>
              <div className="space-y-2">
                <span className="block w-8 h-1 bg-white "></span>
                <span className="block w-8 h-1 bg-white "></span>
                <span className="block w-8 h-1 bg-white "></span>
              </div>
            </button>
          </div>

          <div className={styles.logo}>
            <img src={`${BASE_URL}/logo.png`} alt="" />
          </div>

          <div className={styles.phone_mobile}>
            <a href="tel:+83433112111" className="focus:outline-none">
              <Phone />
            </a>
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

          <div className={styles.contacts}>
            <a href="tel:+83433112111" className={styles.phone}>
              +8 (343) 311-21-11
            </a>
            <Button variant="ghost">Перезвонить мне</Button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="lg:hidden flex flex-col bg-gray-800 text-center py-4 h-full justify-center gap-3">
          <Link className={styles.nav_item} to="/" onClick={toggleMenu}>
            Наши услуги
          </Link>
          <Link className={styles.nav_item} to="/" onClick={toggleMenu}>
            Бренды
          </Link>
          <Link className={styles.nav_item} to="/" onClick={toggleMenu}>
            Отзывы
          </Link>
          <Button variant="ghost" onClick={toggleMenu}>
            закрыть
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
