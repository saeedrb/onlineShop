import React, { useRef, forwardRef } from "react";
import styles from "./verticalMenu.module.css";
import classNames from "classnames";
import Link from "next/link";

const Submenu = forwardRef((props, ref) => {
    return (
      <ul className={styles.submenu} ref={ref}>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i className="fa fa-angle-left"></i> اتصالات کامپیوتری
            </a>
          </Link>
        </li>
      </ul>
    );
  });

export default Submenu;
