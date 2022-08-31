import styles from "./horizontalMenu.module.css";
import {useState, useEffect} from "react"
import classNames from "classnames";
import Link from "next/link";

const SubMenu = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const handleSubMenu = (event) => {
        setIsSubMenuOpen(!isSubMenuOpen);
    }
    const subMenuHandleElement = classNames("fa", styles.subMenuHandler, {
        "fa-plus" : !isSubMenuOpen,
        "fa-minus" : isSubMenuOpen
    });
    const handleWidth = () => {
        window.innerWidth > 800 ? setIsSubMenuOpen(true) : setIsSubMenuOpen(false); 
    }
    
    useEffect(() => {
        handleWidth()
    }, []);

  return (
    <>
      <i
        className={subMenuHandleElement}
        onClick={handleSubMenu}
      />
      {isSubMenuOpen ? (
        <ul className={classNames(styles.subMenu)}>
          <div className={styles.arrowUp}></div>
          <li>
            <Link href="/">
              <a>IC آی سی</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>IC آی سی</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>IC آی سی</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>IC آی سی</a>
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default SubMenu;
