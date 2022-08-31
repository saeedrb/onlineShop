import styles from "./offer.module.css";
import {Button} from '../../../elements'

const Offer = () => {
  return (
    <div className={styles.container}>
      <h3>کد تخفیف</h3>
      <div className={styles.offer}>
        <input type="text" name="offerCode" placeholder="کد را وارد کنید" />
        <Button type="button" name="send" value="بررسی کد" exists={true} />
        <div className={styles.msg}>
        کاربر گرامی، کدهای تخفیف بر روی قیمت محصول‌‌های/سبد خرید دارای تخفیف پلکانی تاثیری نخواهند داشت.
        </div>
      </div>
    </div>
  );
};

export default Offer;
