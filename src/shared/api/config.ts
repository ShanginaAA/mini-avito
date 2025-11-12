import axios, { AxiosRequestConfig } from 'axios';

export const config: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiServer = axios.create(config);

apiServer.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
