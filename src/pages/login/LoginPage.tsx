import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { login } from '../../shared/api';
import AppContext, { ActionTypes } from '../../shared/app.context';
import { getProfile, saveProfile } from '../../shared/utils';
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

  const handleLogin = () => {
    if (fields.username && fields.password) {
      login(fields.username, fields.password)
        .then((res) => {
          if (res.data.token) localStorage.setItem('authToken', res.data.token);
          return getProfile();
        })
        .then((res) => {
          dispatch({ type: ActionTypes.SET_PROFILE, payload: res });
          history.goBack();
        });
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
      <Button title={'Войти'} onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;
