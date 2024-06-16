import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './components/AppRouter.js';

function App() {
  return (
    <BrowserRouter>
      <AppRoter/>
    </BrowserRouter>
  );
}

export default App;