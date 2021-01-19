import React from 'react';

import './App.scss';
import ArticleList from './components/ArticleList/ArticleList';

import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <ArticleList />
    </div>
  );
};

export default App;
