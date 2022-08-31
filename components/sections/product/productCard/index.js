import React from "react";
import Link from "next/link";
import styles from './productCard.module.css';
import classNames from "classnames";


const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.productInfo}>
          <div>
            <img src="/media/testproduct.jpeg" />
            <span className={styles.productName}>فیش آداپتور نری چپقی - ۹۰ درجه</span>
          </div>
        </a>
      </Link>
      <div className={styles.prices}>
        <span className={classNames({
            [styles['offer']] : false
        })}>۶۴۲۰۰ ریال</span>
        <span className={classNames({
            [styles['visibility']] : false
        })}>۶۱۲۰۰ ریال</span>
      </div>
      <button className={styles.addToCard}>افزودن به ثبت خرید</button>
    </div>
  );
};

export default ProductCard;