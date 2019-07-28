import React, { useReducer } from 'react';
import { reducer } from './reducer/reducer';

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
