import axios from 'axios';
import { getItem } from './../utils/storage';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  instance.defaults.timeout = 2500;

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      const token = getItem('token', '');
      if (config.headers && token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
