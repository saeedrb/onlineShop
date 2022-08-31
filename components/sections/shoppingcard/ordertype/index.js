import styles from "./ordertype.module.css";

const OrderType = () => {
  return (
    <div className={styles.container}>
      <h3>نوع سفارش</h3>
      <div className={styles.factorType}>
        <label for="byfactor">
          <input type="radio" name="factorType" id="byfactor" selected />
          احتیاج به فاکتور مهردار، دارم.
        </label>
        <label for="withoutfactor">
          <input type="radio" name="factorType" id="withoutfactor" selected />
          می خواهم از تخفیف فروش اینترنتی استفاده کنم و لیست اجناس را میخواهم.
        </label>
      </div>
    </div>
  );
};

export default OrderType;
