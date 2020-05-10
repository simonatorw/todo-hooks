import React from 'react';

import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />
      <ToDo />
    </div>
  );
}
