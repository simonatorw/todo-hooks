import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import store from './store/store';

import './App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ToDo />
      </div>
    </Provider>
  );
}
