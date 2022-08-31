import classNames from "classnames";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/media/logo-trans.png" />
            </a>
          </Link>
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            name="searchbox"
            placeholder="خازن ، آی‌سی ، LED ، مدل یا گروه محصول مورد نظرتان"
          />
          <i className={classNames("fa", "fa-search", styles.searchIcon)} />
        </div>
        <div className={styles.shoppingCart}>
          <Link href="/">
            <a>
              <i className={classNames("fa", "fa-shopping-cart")} />
              <span> 0 </span>
              <span> آیتم </span>
              <span> 0 </span>
              <span> ریال </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
