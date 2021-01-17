import React from 'react';

import './App.scss';
import Counter from './components/Counter/Counter';

import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Counter />
    </div>
  );
};

export default App;
