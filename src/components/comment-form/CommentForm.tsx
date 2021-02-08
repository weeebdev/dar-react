import React, { useEffect, useState } from 'react';

import styles from './CommentForm.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';
import Profile from '../profile/Profile';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../shared/redux/auth/auth.selectors';

type CommentFormInput = {
  username: string;
  email: string;
  comment: string;
};

const CommentForm: React.FC = () => {
  const [fields, setFields] = useState<CommentFormInput>({
    username: '',
    email: '',
    comment: '',
  });

  const [isClickable, setIsClickable] = useState(false);
  const profile = useSelector(selectProfile);

  const onSubmit = () => {
    console.log('Form submitted', fields);
  };

  useEffect(() => {
    // console.log('FORM CHANGED', fields);
    //   Я тут не понял, если честно, как я должен был оценивать общую валидацию, поэтому так)
    if (fields.email === '' || fields.username === '') {
      setIsClickable(false);
    } else {
      setIsClickable(true);
    }
  }, [fields]);

  const fieldChange = (fieldName: string, value: any) => {
    setFields((oldState) => ({
      ...oldState,
      [fieldName]: value,
    }));
  };

  return profile ? (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Input
          label={'Username'}
          value={fields.username}
          name={'username'}
          type={'text'}
          required
          onChange={(innerValue) => fieldChange('username', innerValue)}
        />
        <Input
          label={'Email'}
          value={fields.username}
          name={'email'}
          //   Решил оставить тип текст, потому что у HTML и так есть встроенная валидация почты, буду ориентироваться на name
          type={'text'}
          required
          onChange={(innerValue) => fieldChange('email', innerValue)}
        />
      </div>
      <Profile username={profile.username} avatar={profile.avatar} />
      <div className={styles.comment}>
        <Input
          label={'Comment'}
          value={fields.comment}
          name={'comment'}
          type={'textarea'}
          onChange={(innerValue) => fieldChange('comment', innerValue)}
        />
      </div>
      <div className={styles.controls}>
        <Button title="Submit" variant="primary" onClick={onSubmit} disabled={!isClickable} />
      </div>
    </div>
  ) : (
    <div className={styles.wrapper}>{'Войдите, чтобы написать комментарий'}</div>
  );
};

export default CommentForm;
