import React from 'react';
import logo from '../../assets/images/logo.svg';

import styles from './MainNav.module.scss';

const MainNav = () => {
  return (
    <div className={styles.MainNav}>
      <nav className={styles.MainNav__nav}>
        <ul className={styles.MainNav__ul}>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              Навыки
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              Знания
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              Карьера
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              Технологии
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              Идеи
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              События
            </a>
          </li>
          <li className={styles.MainNav__li}>
            <a href="/" className={styles.MainNav__a}>
              <img src={logo} alt="logo" className={styles.MainNav__logo} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
