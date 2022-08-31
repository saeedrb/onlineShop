import Slider from "react-slick";
import styles from "./slider.module.css";

const ImageSlider = () => {
  let images = [
    "/media/copter.jpeg",
    "/media/testproduct.jpeg",
    "/media/copter.jpeg",
    "/media/testproduct.jpeg",
  ];
  const setting = {
    customPaging: function (i) {
      return <img src={images[i]} />;
    },
    dots: true,
    dotsClass: `${styles.dots}`,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    rtl: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...setting} className={styles.slider}>
        <div className={styles.slide}>
          <img src="/media/copter.jpeg" />
        </div>
        <div className={styles.slide}>
          <img src="/media/testproduct.jpeg" />
        </div>
        <div className={styles.slide}>
          <img src="/media/copter.jpeg" />
        </div>
        <div className={styles.slide}>
          <img src="/media/testproduct.jpeg" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
