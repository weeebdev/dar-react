import React, { useState } from 'react';
import styles from './Profile.module.scss';

import exit from '../../assets/images/exit.svg';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../shared/redux/auth/auth.actions';

type Props = {
  avatar: string;
  username: string;
};

const Profile: React.FC<Props> = ({ avatar, username }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.replace('/');
  };

  return (
    <div
      className={styles.header__profile}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogout}
    >
      {isHovered && <img src={exit} alt="" className={styles.header__profile__img__exit} />}
      <img src={avatar} alt="" className={styles.header__profile__img} />
      <p className={styles.header__profile__title}>{username}</p>
    </div>
  );
};

export default Profile;
