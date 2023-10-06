import React, { createContext, useReducer } from 'react';
import userReducer from './userReducer';

export const UserContext = createContext();

const initialState = {
  user: null,
  isFetching: false,
  error: false,
  loggedIn: false,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserProvider;
