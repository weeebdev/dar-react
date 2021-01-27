import { IProfile } from './types';

export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const saveProfile = (profile: IProfile) => {
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const deleteProfile = () => {
  localStorage.removeItem('profile');
};

export const getProfile = (): IProfile | null => {
  const res = localStorage.getItem('profile');
  if (res) {
    return JSON.parse(res);
  }
  return null;
};
