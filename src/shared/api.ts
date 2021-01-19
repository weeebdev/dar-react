import axios from 'axios';

const API = 'https://media-api.dar-dev.zone/api';

export const getCategories = () => {
  return axios.get(`${API}/categories`);
};

export const getArticles = () => {
  return axios.get(`${API}/articles?limit=10&sort=id:DESC`);
};
