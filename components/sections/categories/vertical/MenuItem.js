import React,{ useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Submenu from "./Submenu";
import styles from './verticalMenu.module.css';


const MenuItem = ({closeAllSubmenu}) => {
    const submenuRef = useRef(null);
    const icon = useRef(null);
    const [isSubmenuOpen, setSubmenuStatus] = useState(false);

    const submenuIcon = classNames('fa', styles.subMenuHandler , {
        'fa-plus': !isSubmenuOpen,
        'fa-minus': isSubmenuOpen
    });

    const openSubmenu = () => {
        closeAllSubmenu(submenuRef, icon);
        submenuRef.current.style.display = "flex"
        icon.current.classList.add('fa-minus');
        icon.current.classList.remove('fa-plus');
    }
    const closeSubmenu = () => {
        submenuRef.current.style.display = "none"
        icon.current.classList.remove('fa-minus');
        icon.current.classList.add('fa-plus');
    }
    const showsubmenu = () => {  
        (submenuRef.current.style.display === "" || 
        submenuRef.current.style.display === "none" ) ?
        openSubmenu() :
        closeSubmenu();
      };

  return (
    <li className={styles.menuItem}>
      <Link href="/">
        <a>
          <i className="fa fa-angle-left"></i> <span>روباتیک و آموزشی</span>{" "}
        </a>
      </Link>
      <i
        className={submenuIcon}
        onClick={showsubmenu}
        ref={icon}
      ></i>
      <Submenu ref={submenuRef} />
    </li>
  );
};

export default MenuItem;
