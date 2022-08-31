import Link from "next/link";
import Item from "./item";
import styles from "./orders.module.css";

const Orders = () => {
  return (
    <div className={styles.container}>
      <table className={styles.ordersList}>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام</th>
            <th>مدل</th>
            <th>تعداد</th>
            <th>قیمت هر عدد</th>
            <th>مجموع</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <Item />
            <Item />
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
