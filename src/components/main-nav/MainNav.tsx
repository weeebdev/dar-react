import React, { useEffect, useState } from 'react';
import { getCategories } from '../../shared/api';
import { ICategory } from '../../shared/types';

import styles from './MainNav.module.scss';
import MainNavItem, { StyledMainNavItemLink } from './main-nav-item/MainNavItem';

const MainNav = () => {
  const [items, setItems] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories()
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.MainNav}>
      <nav className={styles.MainNav__nav}>
        <ul className={styles.MainNav__ul}>
          <li>
            <StyledMainNavItemLink to={'/articles'}>Все статьи</StyledMainNavItemLink>
          </li>
          {items.map((item) => (
            <MainNavItem {...item} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
