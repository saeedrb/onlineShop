import React from 'react'
import { date } from 'yup';
import styles from './orders.module.css';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';
import jalali from 'jalali-dayjs'
const Orders = () => {
  dayjs.extend(jalali);
  const router = useRouter();
  const handleClick = (path) => {
    router.push(path);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>سفارش‌ها</h2>
        <span>کاربر گرامی جهت دیدن جزئیات هر فاکتور بر روی سطر مربوط به فاکتور کلیک نمایید.</span>
      </div>
      <div className={styles.orders}>
        <table>
          <thead>
            <tr>
              <th>شناسه سفارش</th>
              <th>وضعیت</th>
              <th>مبلغ پرداختی</th>
              <th>تاریخ ثبت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleClick('/category')}>
              <td>MEO-۱۰۷۹۸۸۵</td>
              <td>لغو شده</td>
              <td>۵۶۵۰۰۰ ریال</td>
              <td>{dayjs(Date.now()).locale('fa').format('YYYY/MM/DD h:m:s')}</td>
              <td><i className='fa fa-eye' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders