import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

const getAll = () => {
  const response = axios.get(`${API_URL}/all`);
  return response;
};

export const countriesService = {
  getAll,
};
