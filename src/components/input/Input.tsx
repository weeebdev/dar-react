import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../shared/utils';
import styles from './Input.module.scss';

type Props = {
  label: string;
  name: string;
  type: 'text' | 'textarea';
  value: string;
  onChange: (innerValue: string) => void;
  required?: boolean;
};

const Input: React.FC<Props> = ({ label, name, type, value, onChange, required }) => {
  const [innerValue, setInnerValue] = useState<string>(value);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (required) {
      if (innerValue.trim().length) {
        //   Использовал name, потому что у HTML и так есть встроенная валидация почты, да и в CommentForm у нас тип задан как текст
        if (name === 'email') {
          if (validateEmail(innerValue)) {
            setError(null);
            onChange(innerValue);
          } else {
            setError('The email address is not valid!');
          }
        } else {
          setError(null);
          onChange(innerValue);
        }
      } else {
        setError('The field is required to fill!');
      }
    } else {
      onChange(innerValue);
    }
    //   Я не придумал способа лучше 😅
    // eslint-disable-next-line
  }, [innerValue]);

  return (
    <div className={styles.formControl}>
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} value={innerValue} onChange={(e) => setInnerValue(e.target.value)} />
      ) : (
        <input name={name} type={type} value={innerValue} onChange={(e) => setInnerValue(e.target.value)} />
      )}
      {error && <label>{error}</label>}
    </div>
  );
};

export default Input;
// {/* <textarea name="comment" value={fields.comment} onChange={(e) => fieldChange('comment', e.target.value)} /> */}
