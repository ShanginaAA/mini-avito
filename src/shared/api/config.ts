import axios, { AxiosRequestConfig } from 'axios';

export const config: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: false,
};

export const apiServer = axios.create(config);

apiServer.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('=== FULL ERROR ANALYSIS ===');
    console.log('Error message:', error.message);
    console.log('Error code:', error.code);
    console.log('Error config:', error.config?.url);
    console.log('Is axios error:', axios.isAxiosError(error));

    if (error.response) {
      // Сервер ответил с статусом ошибки
      console.log('Response status:', error.response.status);
      console.log('Response data:', error.response.data);
      console.log('Response headers:', error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      console.log('No response received');
      console.log('Request:', error.request);
    } else {
      // Что-то пошло не так при настройке запроса
      console.log('Error config:', error.config);
    }
    return Promise.reject(error);
  },
);
