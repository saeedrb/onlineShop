import styles from "./tickets.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import dayjs from 'dayjs';
import jalali from 'jalali-dayjs'

const Tickets = () => {
  dayjs.extend(jalali);

  const initialValues = {};
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>تیکت‌های پشتیبانی</h2>
      </div>
      <div className={styles.link}>
        <Link href="/ticket">
          <a>ایجاد تیکت</a>
        </Link>
      </div>
      <div className={styles.tickets}>
        <table>
          <thead>
            <tr>
              <th>موضوع</th>
              <th>تاریخ ثبت</th>
              <th>وضعیت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>دیر رسیدن محصول</td>
              <td>{dayjs(Date.now()).locale('fa').format('YYYY/MM/DD h:m:s')}</td>
              <td>در انتظار بررسی</td>
              <td><i className="fa fa-eye" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
