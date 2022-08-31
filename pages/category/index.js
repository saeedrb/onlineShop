import Link from "next/link";
import React from "react";
import { VerticalMenu } from "../../components/sections/categories";
import { ProductList } from "../../components/sections/product";
import styles from "../home.module.css";
import mainStyles from './Category.module.css';
import SearchBox from "../../components/sections/searchBox";
import SortBox from "../../components/sections/sortBox";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <VerticalMenu />
      </div>
      <div className={styles.main}>
          <div className={mainStyles.container}>
              <div className={mainStyles.categoryDetail}>
                  <div className={mainStyles.categoryDescription}>
                      <h2>آی سی IC</h2>
                      <p>خرید آی سی، فروش آی سی ، قیمت آی سی، و سایر توضیحاتی که همه ما میدانیم فقط مربوط به آی سی است. لذا فقط دنبال آی سی میگردیم.</p>
                  </div>
                  <div className={mainStyles.subCategories}>
                      <span>زیرمجموعه</span>
                      <div>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلرمیکروک نترلرمیکروکنترلرمیکروکنتر لرمیکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          <Link href="/">
                              <a>رگلاتور</a>
                          </Link>
                          <Link href="/">
                              <a>میکروکنترلر</a>
                          </Link>
                          <Link href="/">
                              <a>سایر میکروکنترلرها</a>
                          </Link>
                          <Link href="/">
                              <a>پردازنده صوتی</a>
                          </Link>
                          <Link href="/">
                              <a>تغذیه سوئیچینگ</a>
                          </Link>
                          <Link href="/">
                              <a>آمپیلی فایر</a>
                          </Link>
                          
                      </div>
                  </div>
                    <SearchBox />
                    <SortBox />
                    <ProductList />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Category;
