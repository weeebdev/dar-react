import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { getCategories } from '../../shared/api';
import { CategoryType } from '../../shared/types';
import Button from '../Button/Button';

import styles from './Header.module.scss';
import HeaderItems from './HeaderItems/HeaderItems';

const items = ['О нас', 'Обучение', 'Сообщество', 'Медиа'];

const Header: React.FC = () => {
  // const [items, setItems] = useState<CategoryType[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getCategories();
  //     console.log(res.data);
  //     setItems(res.data);
  //   };
  //   fetchData();
  // }, []);

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
