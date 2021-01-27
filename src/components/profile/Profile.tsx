import React, { useContext, useState } from 'react';
import styles from './Profile.module.scss';

import exit from '../../assets/images/exit.svg';
import AppContext, { ActionTypes } from '../../shared/app.context';
import { useHistory } from 'react-router-dom';
import { deleteProfile } from '../../shared/utils';

type Props = {
  avatar: string;
  username: string;
};

const Profile: React.FC<Props> = ({ avatar, username }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { dispatch } = useContext(AppContext);

  const history = useHistory();

  const logout = () => {
    dispatch({ type: ActionTypes.RESET_PROFILE });

    deleteProfile();

    history.replace('/');
  };

  return (
    <div
      className={styles.header__profile}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={logout}
    >
      {isHovered && <img src={exit} alt="" className={styles.header__profile__img__exit} />}
      <img src={avatar} alt="" className={styles.header__profile__img} />
      <p className={styles.header__profile__title}>{username}</p>
    </div>
  );
};

export default Profile;
