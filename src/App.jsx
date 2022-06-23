import React from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import { Router } from './router/Router';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router />
          {/* <Router>
            <Route path="/" element={<></>} />
          </Router> */}
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
