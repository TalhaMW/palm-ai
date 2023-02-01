import React, { createContext, useReducer } from 'react';

const hamburgerReducer = (state, action) => {
  if (action.type === 'OPEN') {
    return true;
  } else if (action.type === 'CLOSE') {
    return false;
  }
  return state;
};

export const HamburgerContext = createContext();
export const HamburgerContextProvider = ({ children }) => {
  const initialState = false;

  const [state, dispatch] = useReducer(hamburgerReducer, initialState);

  const openMenu = () => {
    dispatch({
      type: 'OPEN',
    });
  };
  const closeMenu = () => {
    dispatch({
      type: 'CLOSE',
    });
  };

  return (
    <HamburgerContext.Provider value={{ isOpen: state, openMenu, closeMenu }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerContextProvider;
