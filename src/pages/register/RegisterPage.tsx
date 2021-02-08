import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { register } from '../../shared/redux/auth/auth.actions';
import { selectProfile, selectLoading } from '../../shared/redux/auth/auth.selectors';
import { IRegister } from '../../shared/types';
import styles from './RegisterPage.module.scss';

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector(selectProfile);
  const loginLoading = useSelector(selectLoading);

  const [fields, setFields] = useState<IRegister>({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    avatar: '',
  });

  useEffect(() => {
    if (profile) {
      history.replace('/');
    }
  }, [profile, history]);

  const handleLogin = () => {
    if (fields.username && fields.password) {
      dispatch(register(fields));
    }
  };

  const fieldChange = (fieldName: string, value: any) => {
    setFields((oldState) => ({
      ...oldState,
      [fieldName]: value,
    }));
  };

  return (
    <div className={styles.RegisterPage}>
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
      <Input
        label={'firstname'}
        type={'text'}
        name={'firstname'}
        value={fields.firstname}
        required
        onChange={(innerValue) => fieldChange('firstname', innerValue)}
      />
      <Input
        label={'lastname'}
        type={'text'}
        name={'lastname'}
        value={fields.lastname}
        required
        onChange={(innerValue) => fieldChange('lastname', innerValue)}
      />
      <Input
        label={'avatar'}
        type={'text'}
        name={'avatar'}
        value={fields.avatar}
        onChange={(innerValue) => fieldChange('avatar', innerValue)}
      />
      {!loginLoading ? (
        <Button title="Register" variant="primary" onClick={handleLogin} />
      ) : (
        <Button title="Loading" variant="ghost" />
      )}
    </div>
  );
};

export default RegisterPage;
