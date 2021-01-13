import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainNav />
    </div>
  );
};

export default App;
