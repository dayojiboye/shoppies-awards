import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
