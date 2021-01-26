import React from 'react';
import styles from './Profile.module.scss';

type Props = {
  avatar: string;
  username: string;
};

const Profile: React.FC<Props> = ({ avatar, username }) => {
  return (
    <div className={styles.header__profile}>
      <img src={avatar} alt="" className={styles.header__profile__img} />
      <p className={styles.header__profile__title}>{username}</p>
    </div>
  );
};

export default Profile;
