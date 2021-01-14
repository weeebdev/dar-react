import React from 'react';
import logo from '../../logo.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <header>
        <img src={logo} alt="logo" className={styles.Header__logo} />
        <nav className={styles.Header__nav}>
          <ul className={styles.Header__ul}>
            <li className={styles.Header__li}>
              <a href="/" className={styles.Header__a}>
                О нас
              </a>
            </li>
            <li className={styles.Header__li}>
              <a href="/" className={styles.Header__a}>
                Обучение
              </a>
            </li>
            <li className={styles.Header__li}>
              <a href="/" className={styles.Header__a}>
                Сообщество
              </a>
            </li>
            <li className={styles.Header__li}>
              <a href="/" className={styles.Header__a}>
                Медиа
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.Header__button}>Войти</button>
      </header>
    </div>
  );
};

export default Header;
