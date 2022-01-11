// Definir como luce o que informacion tendre aqui

import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado Inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//Lo usaremos para decirle a React como luce y que espone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUser: (name: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'favIcon', payload: iconName});
  };

  const changeUser = (name: string) => {
    dispatch({type: 'changeUser', payload: name});
  };
  const logout = () => {
    dispatch({type: 'logOut'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
