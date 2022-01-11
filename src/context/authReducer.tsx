import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'favIcon'; payload: string}
  | {type: 'logOut'}
  | {type: 'changeUser'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'favIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeUser':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
