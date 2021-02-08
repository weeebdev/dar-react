import React, { useEffect } from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import Header from './components/header/Header';
import MainNav from './components/main-nav/MainNav';
import Wrapper from './components/wrapper/Wrapper';
import { Redirect, Route, Switch } from 'react-router-dom';
import ArticlesPage from './pages/articles/ArticlesPage';
import ArticlePage from './pages/article/ArticlePage';
import LoginPage from './pages/login/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchProfile } from './shared/redux/auth/auth.actions';
import RegisterPage from './pages/register/RegisterPage';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('authToken')) dispatch(fetchProfile());
  }, [dispatch]);

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
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Wrapper>
    </div>
  );
};

export default App;
