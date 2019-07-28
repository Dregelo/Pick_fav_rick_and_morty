import React, { useContext } from 'react';
import { Store } from './Store';

const App = (): JSX.Element => {
  const store = useContext(Store);
  return (
    <div>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </div>
  );
};

export default App;
