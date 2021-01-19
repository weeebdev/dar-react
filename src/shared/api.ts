import axios from 'axios';

const getCategories = () => {
  return axios.get('https://media-api.dar-dev.zone/api/categories');
};

export default getCategories;
