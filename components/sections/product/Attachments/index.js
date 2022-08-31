import Link from 'next/link';
import { MyLink } from '../../../elements';
import styles from './attachments.module.css';


const Attachments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <h3>فایل های مورد نیاز </h3>
        <div className={styles.link}>
          <span className={styles.linkTitle}>نرم افزاری که برای دانلود مورد نیازهنرم افزاری که برای دانلود مورد نیازه</span>
          <Link href="/" >
            <a className={styles.dowloadLink}><i className="fa fa-download"/></a>
          </Link>
        </div>
        <div className={styles.link}>
          <span className={styles.linkTitle}>نرم افزاری که برای دانلود مورد نیازه</span>
          <Link href="/" >
            <a className={styles.dowloadLink}><i className="fa fa-download"/></a>
          </Link>
        </div>
        <div className={styles.link}>
          <span className={styles.linkTitle}>نرم افزاری که برای دانلود مورد نیازه</span>
          <Link href="/" >
            <a className={styles.dowloadLink}><i className="fa fa-download"/></a>
          </Link>
        </div>
        <div className={styles.link}>
          <span className={styles.linkTitle}>نرم افزاری که برای دانلود مورد نیازه</span>
          <Link href="/" >
            <a className={styles.dowloadLink}><i className="fa fa-download"/></a>
          </Link>
        </div>
        <div className={styles.link}>
          <span className={styles.linkTitle}>نرم افزاری که برای دانلود مورد نیازه</span>
          <Link href="/" >
            <a className={styles.dowloadLink}><i className="fa fa-download"/></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Attachments