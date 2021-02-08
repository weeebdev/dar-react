import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { startLogin } from '../../shared/redux/auth/auth.actions';
import { selectProfile, selectLoading } from '../../shared/redux/auth/auth.selectors';
import { ILogin } from '../../shared/types';
import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector(selectProfile);
  const loading = useSelector(selectLoading);

  const [fields, setFields] = useState<ILogin>({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (profile) {
      history.replace('/');
    }
  }, [profile, history]);

  const handleLogin = () => {
    if (fields.username && fields.password) {
      dispatch(startLogin(fields));
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
      {!loading ? (
        <Button title="Login" variant="primary" onClick={handleLogin} />
      ) : (
        <Button title="Loading" variant="ghost" />
      )}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
