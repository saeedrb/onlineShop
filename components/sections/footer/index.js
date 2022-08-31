import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.companyData}>
          <div className={styles.infoBox}>
            <h4>اطلاعات تماس</h4>
            <div className={styles.infoItem}>
              <i className="fa fa-location-dot"></i>
              <span>ساری - میدان امام - خیابان ۲۲ بهمن</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fa fa-phone"></i>
              <span>۰۱۱-۳۳۴۳۰۶۴۰</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fa fa-envelope"></i>
              <span><a href="mailto:merqc@gmail.com">merqc@gmail.com</a></span>
            </div>
          </div>
          <div className={styles.infoBox}>
              <h4>فروشگاه</h4>
              <div className={styles.infoItem}>
                  <Link href="/">
                      <a>محمد الکترونیک</a>
                  </Link>
              </div>
              <div className={styles.infoItem}>
                  <Link href="/">
                      <a>نحوه ارسال</a>
                  </Link>
              </div>
              <div className={styles.infoItem}>
                  <Link href="/">
                      <a>حریم شخصی کاربران</a>
                  </Link>
              </div>
              <div className={styles.infoItem}> 
                  <Link href="/">
                      <a>قوانین</a>
                  </Link>
              </div>
          </div>
          <div className={styles.infoBox}>
              <h4>مختصری از MERQC</h4>
              <p>فروشگاه محمد الکترونیک با حدود یک دهه سابقه در زمینه تهیه و توزیع قطعات الکترونیک , رباتیک , ابزار دقیق , انواع باتری و ... به صورت عمده و خرده در بازار سنتی جهت رفاه هرچه بیشتر مشتریان و هم گام بودن با تکنولوژی تصمیم به راه اندازی فروشگاه اینترنتی با قابلیت خرید آنلاین و ارسال سفارشات نموده است.</p>
          </div>
          <div className={styles.infoBox}>
              <img src="/media/accept.png" />
          </div>
        </div>
        <div className={styles.links}>
            <div>
                <p>تمامی حقوق مادی و معنوی این وبسایت مربوط به فروشگاه قطعات الکترونیکی می باشد.
                </p>
            </div>
            <div className={styles.socials}>
                <a href="#"  >
                    <i className="icon-telegram-fill" />
                </a>
                <a href="#"  >
                    <i className="icon-linkedin-box-fill" />
                </a>
                <a href="#"  >
                    <i className="icon-facebook-fill" />
                </a>
                <a href="#"  >
                    <i className="icon-twitter-fill" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
