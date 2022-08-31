import Orders from "../../components/sections/shoppingcard/orders";
import OrderType from "../../components/sections/shoppingcard/ordertype";
import PostageType from "../../components/sections/shoppingcard/postagetype";
import styles from "./shoppingcard.module.css";
import Offer from "../../components/sections/shoppingcard/offer";
import PostagePrice from "../../components/sections/shoppingcard/postageprice";
import { Button } from "../../components/elements";

const ShoppingCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>سبد خرید</h2>
      </div>
      <div className={styles.orders}>
        <Orders />
      </div>
      <div className={styles.factorType}>
        <OrderType />
      </div>
      <div className={styles.calculateSendCost}>
        <PostagePrice />
      </div>
      <div className={styles.horizontalBox}></div>
      <div className={styles.sendType}>
        <PostageType />
      </div>

      <div className={styles.send}>
        <div className={styles.offer}>
          <Offer />
        </div>
        <div className={styles.payment}>
            <h3>پرداخت</h3>
            <div>
                <span>هزینه محصولات</span>
                <span>۸۳۵۸۰۰ ریال</span>
            </div>
            <div>
                <span>هزینه ارسال</span>
                <span>۲۹۴۰۰۰ ریال</span>
            </div>
            <div>
                <span>مبلغ پرداختی</span>
                <span>۲۹۴۰۰۰ ریال</span>
            </div>
            <Button name="payment" type="button" exists={true} value="پرداخت" />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
