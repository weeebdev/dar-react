import React, { useEffect } from 'react';

import styles from './MainNav.module.scss';
import MainNavItem, { StyledMainNavItemLink } from './main-nav-item/MainNavItem';
import { selectCategories } from '../../shared/redux/categories/categories.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../shared/redux/categories/categories.actions';

const MainNav = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.MainNav}>
      <nav className={styles.MainNav__nav}>
        <ul className={styles.MainNav__ul}>
          <li>
            <StyledMainNavItemLink to={'/articles'}>Все статьи</StyledMainNavItemLink>
          </li>
          {categories.map((item) => (
            <MainNavItem {...item} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
