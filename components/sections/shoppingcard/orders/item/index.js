import { useState } from "react";
import styles from "./item.module.css";
import Link from "next/link";
import classNames from "classnames";

const Item = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
      setCount(count + 1);
  }
  const decrease = () => {
      (count <= 1) ? setCount(1) : setCount(count - 1);
  }
  return (
    <tr className={styles.item}>
      <td>
        <img src="/media/copter.jpeg" />
      </td>
      <td>
        <Link href="/">
          <a>ماسفت OSG55R190F 23A 550V </a>
        </Link>
      </td>
      <td>OSG55R190F</td>
      <td>
        <i
          className={classNames("fa fa-minus", styles.counterHandler)}
          onClick={decrease}
        />
        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        <i
          className={classNames("fa fa-plus", styles.counterHandler)}
          onClick={increase}
        />
      </td>
      <td>۴۱۵۰۰ تومان</td>
      <td>۴۱۵۰۰ تومان</td>
      <td><i className={classNames("fa fa-trash", styles.itemDelete)} /></td>
    </tr>
  );
};

export default Item;
