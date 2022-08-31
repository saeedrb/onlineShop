import styles from "./product.module.css";
import ImageSlider from "../../components/sections/slider";
import { Button, Input, MyLink } from "../../components/elements";
import classNames from "classnames";
import { useState } from "react";
import { Comments, Features, ProductSlider, Review, Attachments } from "../../components/sections/product";
import Tabs from "../../components/sections/tabs";

const Product = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(parseInt(count) + 1);
  };
  const decrease = () => {
    count <= 1 ? 1 : setCount(parseInt(count) - 1);
  };
  const tabsData = [
    {
      title: "نقد و بررسی",
      content: <Review />,
    },
    {
      title: "خصوصیات",
      content: <Features />,
    },
    {
      title: "دیدگاه ها/نقدها",
      content: <Comments />,
    },
    {
      title: "فایل های قابل دریافت",
      content: <Attachments />,
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <div className={styles.slider}>
          <ImageSlider />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productPrimaryAssets}>
            <div className={styles.productProperty}>
              <span>دسته بندی محصول: </span>
              <span>
                <MyLink href="">کواد کوپتر آماده</MyLink>
              </span>
            </div>
            <div className={styles.productProperty}>
              <span>کد محصول: ‌</span>
              <span>4295</span>
            </div>
            <div className={styles.productProperty}>
              <span> امتیاز محصول: ‌</span>
              <span>۷۰۰</span>
            </div>
            <div className={styles.productProperty}>
              <span>موجود در انبار :‌ </span>
              <Button
                value="ناموجود"
                type="button"
                disable={true}
                exists={false}
              />
            </div>
            <div className={styles.productProperty}>
              <MyLink href="">موجود شد خبرم کن</MyLink>
            </div>
            <div className={styles.productPrice}>
              <span className={classNames(styles.price, styles.lineThrough)}>
                ۴۴۴۰۵۰ ریال
              </span>
              <span className={styles.offer}>۴۰۰۰۵۰ ریال</span>
            </div>
          </div>

          <div className={styles.productHandler}>
            <div className={styles.productCountHandler}>
              <label>تعداد </label>
              <div className={styles.countHandler}>
                <i
                  className={classNames("fa fa-plus", styles.handlerButton)}
                  onClick={increase}
                />
                <input
                  type="text"
                  value={count}
                  name="productCount"
                  id="productCount"
                  className={styles.productCount}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                />
                <i
                  className={classNames("fa fa-minus", styles.handlerButton)}
                  onClick={decrease}
                />
              </div>
            </div>
            <Button type="button" value="افزودن به سبد" exists="true" />
          </div>
        </div>
      </div>
      <ProductSlider sectionTitle="محصولات مشابه" />

      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default Product;
