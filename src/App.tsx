import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import Header from './components/header/Header';
import MainNav from './components/main-nav/MainNav';
import Wrapper from './components/wrapper/Wrapper';
import { Redirect, Route, Switch } from 'react-router-dom';
import ArticlesPage from './pages/articles/ArticlesPage';
import ArticlePage from './pages/article/ArticlePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Wrapper>
        <Switch>
          <Redirect exact path="/" to="/articles" />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route path="/articles/:categoryId" component={ArticlesPage} />
          <Route path="/article/:articleId" component={ArticlePage} />
        </Switch>
      </Wrapper>
    </div>
  );
};

export default App;
