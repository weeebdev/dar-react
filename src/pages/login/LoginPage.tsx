import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import AppContext, { ActionTypes } from '../../shared/app.context';
import { saveProfile } from '../../shared/utils';
import styles from './LoginPage.module.scss';

type LoginPageInput = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    state: { profile },
    dispatch,
  } = useContext(AppContext);

  const [fields, setFields] = useState<LoginPageInput>({
    username: '',
    password: '',
  });

  const history = useHistory();

  if (profile) {
    history.push('/');
  }

  const login = () => {
    if (fields.username && fields.password) {
      const mockUser = {
        username: fields.username,
        firstname: 'Adil',
        lastname: 'Akhmetov',
        avatar: 'https://avatars.githubusercontent.com/u/48881444?s=460&u=a2317274ce4b7c57e3c87e604e55595d65d02a2a&v=4',
      };

      dispatch({ type: ActionTypes.SET_PROFILE, payload: mockUser });

      saveProfile(mockUser);

      history.goBack();
    }
  };

  const fieldChange = (fieldName: string, value: any) => {
    setFields((oldState) => ({
      ...oldState,
      [fieldName]: value,
    }));
  };

  return (
    <div className={styles.LoginPage}>
      <Input
        label={'username'}
        type={'text'}
        name={'username'}
        value={fields.username}
        required
        onChange={(innerValue) => fieldChange('username', innerValue)}
      />
      <Input
        label={'password'}
        type={'password'}
        name={'password'}
        value={fields.password}
        required
        onChange={(innerValue) => fieldChange('password', innerValue)}
      />
      <Button title={'Войти'} onClick={login} />
    </div>
  );
};

export default LoginPage;
