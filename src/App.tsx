import React, { useReducer } from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import Header from './components/header/Header';
import MainNav from './components/main-nav/MainNav';
import Wrapper from './components/wrapper/Wrapper';
import { Redirect, Route, Switch } from 'react-router-dom';
import ArticlesPage from './pages/articles/ArticlesPage';
import ArticlePage from './pages/article/ArticlePage';
import AppContext, { reducer } from './shared/app.context';
import LoginPage from './pages/login/LoginPage';
import { getProfile } from './shared/utils';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { profile: getProfile() });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <MainNav />
        <Wrapper>
          <Switch>
            <Redirect exact path="/" to="/articles" />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route path="/articles/:categoryId" component={ArticlesPage} />
            <Route path="/article/:articleId" component={ArticlePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Wrapper>
      </div>
    </AppContext.Provider>
  );
};

export default App;
