import {useState} from 'react'
import Link from "next/link";
import styles from "./profile.module.css";
import {Tickets, Transactions, PersonalData, Orders, Interest} from '../../components/sections/profile';

const Profile = () => {
    const [page, setPage] = useState(<PersonalData />);
  const handleClick = (page) => {
      setPage(page);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          <li onClick={() => handleClick(<PersonalData />)}>
            <i className="fa fa-user"></i> <span>اطلاعات شخصی</span>
          </li>
          <li onClick={() => handleClick(<Orders />)}>
            <i className="fa fa-cart-shopping"></i> <span>سفارش‌ها</span>
          </li>
          <li onClick={() => handleClick(<Transactions />)}>
            <i className="fa fa-dollar-sign"></i> <span>تراکنش‌ها</span>
          </li>
          <li onClick={() => handleClick(<Interest />)}>
            <i className="fa fa-heart"></i> <span>علاقه‌مندی‌ها</span>
          </li>
          <li onClick={() => handleClick(<Tickets />)}>
            <i className="fa fa-envelope"></i> <span>تیکت‌ها</span>
          </li>
        </ul>
      </div>
      <div className={styles.main}>
          {page}
      </div>
    </div>
  );
};

export default Profile;
