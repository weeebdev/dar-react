import { ILogin, IProfile, IRegister } from '../../types';

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  FETCH_PROFILE = 'FETCH_PROFILE',
  SET_PROFILE = 'SET_PROFILE',
  RESET_PROFILE = 'RESET_PROFILE',
  FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
  REGISTER = 'REGISTER',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
}

export interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: ILogin;
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
}

export interface LoginErrorAction {
  type: AuthActionTypes.LOGIN_ERROR;
  payload: string;
}

export interface SetProfileAction {
  type: AuthActionTypes.SET_PROFILE;
  payload: IProfile;
}

export interface ResetProfileAction {
  type: AuthActionTypes.RESET_PROFILE;
}

export interface FetchProfileAction {
  type: AuthActionTypes.FETCH_PROFILE;
}

export interface FetchProfileSuccessAction {
  type: AuthActionTypes.FETCH_PROFILE_SUCCESS;
  payload: IProfile;
}

export interface FetchProfileErrorAction {
  type: AuthActionTypes.FETCH_PROFILE_ERROR;
  payload: string;
}

export interface RegisterAction {
  type: AuthActionTypes.REGISTER;
  payload: IRegister;
}

export interface RegisterSuccessAction {
  type: AuthActionTypes.REGISTER_SUCCESS;
}

export interface RegisterErrorAction {
  type: AuthActionTypes.REGISTER_ERROR;
  payload: string;
}

export type AuthAction =
  | FetchProfileAction
  | SetProfileAction
  | ResetProfileAction
  | FetchProfileSuccessAction
  | FetchProfileErrorAction
  | LoginAction
  | LogoutAction
  | LoginSuccessAction
  | LoginErrorAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction;
