import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio!</h1>
      <p className={styles.subtitle}>
        Hi, I'm Juan Diego Arias Martinez! This is my personal space on the web where I share my projects, my professional background, and a little bit about my passions outside of work. Feel free to look around!
      </p>
    </div>
  );
};

export default HomePage;