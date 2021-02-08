import axios from 'axios';
import { IArticle, ICategory } from './types';

const API = 'https://media-api.dar-dev.zone/api';
const BFF = 'http://localhost:3333';

export const getCategories = () => {
  return axios.get<ICategory[]>(`${API}/categories`);
};

export const getArticle = (articleId: string) => {
  return axios.get<IArticle>(`${API}/articles/${articleId}`);
};

export const getArticles = (categoryId?: string) => {
  const params: {
    sort: string;
    limit: number;
    category?: string;
  } = {
    sort: 'id:DESC',
    limit: 10,
  };

  if (categoryId) {
    params['category'] = categoryId;
  }

  return axios.get<IArticle[]>(`${API}/articles`, {
    params,
  });
};

export const login = (username: string, password: string) => {
  return axios.post(`${BFF}/auth/login`, {
    username,
    password,
  });
};

export const getProfile = () => {
  const token = localStorage.getItem('authToken');
  return axios.get(`${BFF}/auth/profile`, {
    headers: {
      Authorization: token,
    },
  });
};
