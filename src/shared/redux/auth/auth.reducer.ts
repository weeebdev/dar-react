import { AuthAction, AuthActionTypes } from './auth.types';
import { IProfile } from './../../types';

export interface AuthState {
  profile: IProfile | null;
  loginError: string;
  loading: boolean;
  profileError: string;
  registerError: string;
}

const defaultState = {
  profile: null,
  loginError: '',
  loading: false,
  profileError: '',
  registerError: '',
};

export const authReducer = (state: AuthState = defaultState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        loading: true,
        loginError: '',
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginError: '',
        loading: false,
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };
    case AuthActionTypes.REGISTER:
      return {
        ...state,
        loading: true,
        registerError: '',
      };
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerError: '',
        loading: false,
      };
    case AuthActionTypes.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        registerError: action.payload,
      };
    case AuthActionTypes.SET_PROFILE:
    case AuthActionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case AuthActionTypes.FETCH_PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
      };
    case AuthActionTypes.RESET_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};
