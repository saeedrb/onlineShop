import styles from "./postagetype.module.css";

const PostageType = () => {
  return (
    <div className={styles.container}>
      <h3>کلاس ارسال محصول</h3>
      <div className={styles.factorType}>
        <label for="byfactor">
          <input type="radio" name="postagetype" id="byfactor" selected />
         پست پیشتاز (ارسال محصول بوسیله سرویس پست پیشتاز شرکت پست ایران، دریافت مشتری بین ۱ الی ۳ روز کاری)
        </label>
        <label for="withoutfactor">
          <input type="radio" name="postagetype" id="withoutfactor" selected />
         ترمینال (مرسوله با پیک به ترمینال ارسال شده و هزینه باربری پس کرایه خواهد شد.)
        </label>
      </div>
    </div>
  );
};

export default PostageType;
