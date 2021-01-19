import React, { useEffect, useState } from 'react';
import { getCategories } from '../../shared/api';
import { CategoryType } from '../../shared/types';

import styles from './MainNav.module.scss';
import MainNavItem from './MainNavItem/MainNavItem';

const MainNav = () => {
  const [items, setItems] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategories();
      console.log(res.data);
      setItems(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.MainNav}>
      <nav className={styles.MainNav__nav}>
        <ul className={styles.MainNav__ul}>
          {items.map((item) => (
            <MainNavItem {...item} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
