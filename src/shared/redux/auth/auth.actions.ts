import { ILogin, IProfile, IRegister } from './../../types';
import {
  AuthActionTypes,
  FetchProfileAction,
  FetchProfileErrorAction,
  FetchProfileSuccessAction,
  LoginAction,
  LoginErrorAction,
  LoginSuccessAction,
  LogoutAction,
  RegisterAction,
  RegisterErrorAction,
  RegisterSuccessAction,
  ResetProfileAction,
} from './auth.types';

export const startLogin = (loginInput: ILogin): LoginAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: loginInput,
  };
};

export const startLoginSuccess = (): LoginSuccessAction => {
  return {
    type: AuthActionTypes.LOGIN_SUCCESS,
  };
};

export const startLoginError = (error: string): LoginErrorAction => {
  return {
    type: AuthActionTypes.LOGIN_ERROR,
    payload: error,
  };
};

export const fetchProfile = (): FetchProfileAction => {
  return {
    type: AuthActionTypes.FETCH_PROFILE,
  };
};

export const fetchProfileSuccess = (profile: IProfile): FetchProfileSuccessAction => {
  return {
    type: AuthActionTypes.FETCH_PROFILE_SUCCESS,
    payload: profile,
  };
};

export const fetchProfileError = (error: string): FetchProfileErrorAction => {
  return {
    type: AuthActionTypes.FETCH_PROFILE_ERROR,
    payload: error,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export const resetProfile = (): ResetProfileAction => {
  return {
    type: AuthActionTypes.RESET_PROFILE,
  };
};

export const register = (registerInput: IRegister): RegisterAction => {
  return {
    type: AuthActionTypes.REGISTER,
    payload: registerInput,
  };
};

export const registerSuccess = (): RegisterSuccessAction => {
  return {
    type: AuthActionTypes.REGISTER_SUCCESS,
  };
};

export const registerError = (error: string): RegisterErrorAction => {
  return {
    type: AuthActionTypes.REGISTER_ERROR,
    payload: error,
  };
};
