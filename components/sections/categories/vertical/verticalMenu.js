import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./verticalMenu.module.css";
import Submenu from "./Submenu";
import MenuItem from "./MenuItem";

const VerticalMenu = () => {
  const closeAllSubmenu = (submenuRef, icon) => {
    let classname = submenuRef.current.classList[0];
    const submenus = document.querySelectorAll(`.${classname}`);

    submenus.forEach(submenu => {
      submenu.style.display = "none";
    })

    const iconsClassname = icon.current.classList[1];
    const icons = document.querySelectorAll(`.${iconsClassname}`);
    console.log(icons)
    icons.forEach(item => {
      console.log(item); changeSubmenuIcon(item);
    })
  }
  const changeSubmenuIcon = (item) => {
    console.log(item);
    item.classList.remove('fa-minus');
      item.classList.add('fa-plus');
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuHeader}>
        <h3>
          <i className="fa fa-list" /> دسته بندی ها
        </h3>
      </div>
      <div className={styles.menubox}>
        <ul className={styles.menu}>
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
            <MenuItem closeAllSubmenu={closeAllSubmenu} />
        </ul>
      </div>
    </div>
  );
};

export default VerticalMenu;
