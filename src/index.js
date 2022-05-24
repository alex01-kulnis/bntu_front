import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={Context}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
