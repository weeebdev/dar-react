import { createContext } from 'react';
import { IProfile } from './types';

export enum ActionTypes {
  SET_PROFILE = 'SET_PROFILE ',
  RESET_PROFILE = 'RESET_PROFILE ',
}

export interface AppAction {
  type: ActionTypes;
  payload?: any;
}

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ActionTypes.RESET_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};

export interface AppState {
  profile: IProfile | null;
}

export interface IAppContext {
  state: AppState;
  dispatch: (action: AppAction) => void;
}

const AppContext = createContext<IAppContext>({
  state: {
    profile: null,
  },
  dispatch: () => {},
});

export default AppContext;
