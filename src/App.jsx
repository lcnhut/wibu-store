import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Footer, Navbar } from './components';
import { AdminPage, Collection, Details, Product } from './pages';
import { Router } from './router/Router';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
