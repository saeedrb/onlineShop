import Link from "next/link";
import styles from "./horizontalMenu.module.css";
import classNames from "classnames";
import { useRef, useState } from "react";
import SubMenu from "./submenu";

const HorizontalMenu = () => {
  
  const navRef = useRef(null);


  const toggleNavbar = () => {
    navRef.current.style.display === "" ||
    navRef.current.style.display === "none"
      ? (navRef.current.style.display = "flex")
      : (navRef.current.style.display = "none");
  };

  return (
    <div className={styles.container}>
      <div className={styles.bars} onClick={toggleNavbar}>
        <i className={classNames("fa", "fa-bars")}></i>
      </div>
      <div ref={navRef} className={styles.navbar}>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <a className={classNames(styles.active)}>
                <i className={classNames("fa", "fa-home")} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>روباتیک و آموزش</a>
            </Link>
            <SubMenu />
          </li>
          <li>
            <Link href="/">
              <a>روباتیک و آموزش</a>
            </Link>
            <SubMenu />
          </li>
          <li>
            <Link href="/">
              <a>روباتیک و آموزش</a>
            </Link>
            <SubMenu />
          </li>
          <li>
            <Link href="/">
              <a>روباتیک و آموزش</a>
            </Link>
            <SubMenu />
          </li>
          <li>
            <Link href="/">
              <a>روباتیک و آموزش</a>
            </Link>
            <SubMenu />
          </li>

        </ul>
      </div>
      <div className={styles.offers}>
        <span>
          <Link href="/">
            <a>پیشنهاد ویژه</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HorizontalMenu;
