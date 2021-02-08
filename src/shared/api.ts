import axios from 'axios';
import { IArticle, ICategory, ILogin, IProfile, IRegister } from './types';

const API = 'https://media-api.dar-dev.zone/api';
const BFF = process.env.BFF || 'http://localhost:3333';

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

export const login = (data: ILogin) => {
  return axios.post(`${BFF}/auth/login`, data);
};

export const getProfile = () => {
  const token = localStorage.getItem('authToken');
  return axios.get<IProfile>(`${BFF}/auth/profile`, {
    headers: {
      Authorization: token,
    },
  });
};

export const register = (data: IRegister) => {
  return axios.post(`${BFF}/auth/register`, data);
};
