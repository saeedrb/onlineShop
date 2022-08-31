import React from "react";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import ProductCard from '../productCard'
const ProductSlider = ({sectionTitle = 'آخرین محصولات'}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="fa fa-bookmark" />
        <h3>{sectionTitle}</h3>
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
