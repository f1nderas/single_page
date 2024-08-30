import { FC, useState } from "react";

import styles from "./Reviews.module.scss";
import { BASE_URL } from "../../constants/config.constant";
import { reviews } from "../../data/reviews.data";

const Reviews: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <div className={styles.title}>Отзывы</div>
        <div className={styles.inner}>
          <button onClick={handlePrev} className={styles.left_btn}>
            ←
          </button>

          <div className={styles.reviews}>
            {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
              <div key={review.id} className={styles.card}>
                <div className={styles.info}>
                  <img
                    className={styles.img}
                    src={`${BASE_URL}/reviews/logo.svg`}
                    alt="logo"
                  />
                  <div className={styles.name}>{review.name}</div>
                </div>

                <p className="mt-4">{review.text}</p>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className={styles.right_btn}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
