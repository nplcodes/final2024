// UserContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loggedIn: !!localStorage.getItem('user'),
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload, loggedIn: true };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { ...state, user: null, loggedIn: false };
    case 'UPDATE_USER':
        localStorage.setItem('user', JSON.stringify(action.payload));
        return { ...state, user: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const updateUser = (updatedUserData) => {
    dispatch({ type: 'UPDATE_USER', payload: updatedUserData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ state, login, logout, updateUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };



