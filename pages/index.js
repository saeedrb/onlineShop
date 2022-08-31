import React from "react";
import VerticalMenu from "../components/sections/categories/vertical/verticalMenu";
import { ProductSlider } from "../components/sections/product";
import styles from './home.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <VerticalMenu />
      </div>
      <div className={styles.main}>
        <ProductSlider />
        <ProductSlider />
        <ProductSlider />
        <ProductSlider />
      </div>
    </div>
  );
}

export default Home;
