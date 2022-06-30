import React from 'react';
// Styles
import styles from '../styles/PizzaCard.module.css';
// Components
import Image from 'next/image';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/img-pizza1.png' height={400} width={400} alt='Pizza option image' />
      <h2 className={styles.title}>Napolitana</h2>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
    </div>
  )
}

export default PizzaCard;