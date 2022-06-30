import React from 'react';
// Styles
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Are you ready to be blown away?</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate, error deserunt necessitatibus dolores quasi exercitationem totam, rerum similique aperiam maiores assumenda? Sunt nostrum dolore maiores voluptatum, enim neque molestias? Obcaecati laborum libero ullam ducimus iste facere.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList;