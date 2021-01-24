import axios from 'axios';
import { IArticle, ICategory } from './types';

const API = 'https://media-api.dar-dev.zone/api';

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
