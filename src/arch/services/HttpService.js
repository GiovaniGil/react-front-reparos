import axios from 'axios';
import { clearLocalStorage, getToken } from './LocalStorageService';

const httpService = axios.create({
  baseURL: 'https://localhost:5001/api/',
});

httpService.interceptors.request.use(
  (config) => {
    const configure = config;
    const token = getToken();
    if (token) {
      configure.headers.Authorization = `Bearer ${token}`;
    }
    return configure;
  },
);

httpService.interceptors.response.use(
  undefined,
  (err) => {
    if ((err.response && err.response.status === 401) || err.response.status === 403) {
      clearLocalStorage();
       //window.location = '/';
    }

    return Promise.reject(err);
  },
);

httpService.interceptors.request.use(
  (config) => {
    const configure = config;

    configure.headers.common['x-api-key'] = 'key_cardhub_development';

    return configure;
  },
);

export default httpService;
