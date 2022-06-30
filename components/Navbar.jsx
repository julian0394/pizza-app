import React from 'react';
// Styles
import styles from '../styles/Navbar.module.css';
// Icons
import phoneIcon from '../public/img/telephone.png';
import pizzaIcon from '../public/favicon.png';
import cartIcon from '../public/img/cart.png';
// Componentes
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={phoneIcon} alt="Telephone icon" height="32px" width="32px" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>4587-4587</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <h1> Super Pizza </h1>
            {/* <Image src={pizzaIcon} alt="Telephone icon" height="48px" width="48px" /> */}
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src={cartIcon} alt="Cart icon" height="30px" width="30px" />
          <div className={styles.counter}>1</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
