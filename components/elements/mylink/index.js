import Link from "next/link"
import styles from './Link.module.css';
import classNames from "classnames";

const MyLink = ({href, children}, exists = true) => {
  return (
    <Link href={href}>
        <a className={classNames({
          [styles['link']]: true,
        })}>{children}</a>
    </Link>
  )
}

export default MyLink