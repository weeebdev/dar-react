import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';
import ArticleList from './components/ArticleList/ArticleList';

import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';
import Wrapper from './components/Wrapper/Wrapper';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Wrapper>
        <ArticleList />
      </Wrapper>
    </div>
  );
};

export default App;
