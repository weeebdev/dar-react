import React from 'react';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';

import styles from './Header.module.scss';
import HeaderItems from './HeaderItems/HeaderItems';

const items = ['О нас', 'Обучение', 'Сообщество', 'Медиа'];

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <header>
        <img src={logo} alt="logo" className={styles.Header__logo} />
        <nav className={styles.Header__nav}>
          <HeaderItems items={items} />
        </nav>
        <Button title={'Войти'} />
      </header>
    </div>
  );
};

export default Header;
