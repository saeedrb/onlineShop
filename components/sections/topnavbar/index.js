import Link from "next/link";
import styles from "./topnav.module.css";
import classNames from "classnames";
import {useRef} from 'react';
const TopNav = () => {

  const menuRef = useRef(null);

  const toggleMenue = () => {
    (menuRef.current.style.display === "none" || menuRef.current.style.display === "") ? 
    menuRef.current.style.display = "flex"
    : 
    menuRef.current.style.display = "none";
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.bars)} onClick={toggleMenue}>
        <i className={classNames("fa", "fa-align-justify")} />
      </div>
      <div ref={menuRef} className={classNames(styles.links,styles.right)}>
        <Link href="/">
          <a>
            <i className={classNames("fa", "fa-credit-card")} /> پرداخت
          </a>
        </Link>
        <Link href="/">
          <a>
            <i className={classNames("fa", "fa-cube")} /> پیگیری سفارش
          </a>
        </Link>
        <Link href="/">
          <a>
            <i className={classNames("fa", "fa-envelope")} />{" "}
            saeed.rb71@gmail.com
          </a>
        </Link>
        <Link href="/">
          <a aria-disabled="true">
            <i className={classNames("fa", "fa-phone")} /> 09330669987
          </a>
        </Link>
      </div>
      <div className={classNames(styles.left, styles.links)}>
        <Link href="/">
          <a>
            <i className={classNames("fa", "fa-user")} /> ورود / ثبت نام
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
