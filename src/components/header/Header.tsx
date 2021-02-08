import React from 'react';
import logo from '../../assets/images/logo.svg';
import Button from '../button/Button';

import styles from './Header.module.scss';
import HeaderItems from './header-items/HeaderItems';
import Profile from '../profile/Profile';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../shared/redux/auth/auth.selectors';

const items = [''];

const Header: React.FC = () => {
  const profile = useSelector(selectProfile);

  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  return (
    <div className={styles.Header}>
      <header>
        <img src={logo} alt="logo" className={styles.Header__logo} />
        <nav className={styles.Header__nav}>
          <HeaderItems items={items} />
        </nav>
        {profile ? (
          <Profile username={profile.username} avatar={profile.avatar} />
        ) : (
          <Button title={'Войти'} onClick={goToLogin} />
        )}
      </header>
    </div>
  );
};

export default Header;
