import React, { createContext } from 'react';
import { TypeStore, store } from './store';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const Context = createContext({} as TypeStore);

root.render(
  <Context.Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();