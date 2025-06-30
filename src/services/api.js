import axios from 'axios';
import { API_CONFIG } from '../utils/constants';
import { getToken, removeToken } from './storage';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: API_CONFIG.HEADERS
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers['X-Auth-Token'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      await removeToken();
    }
    return Promise.reject(error);
  }
);

export default api;
