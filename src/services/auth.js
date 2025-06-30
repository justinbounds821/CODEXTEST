import api from './api';
import { saveToken, removeToken } from './storage';
import { buildFormData } from '../utils/helpers';
import { API_CONFIG } from '../utils/constants';

export async function login({ phone, password }) {
  const data = buildFormData({ phone, password });
  const response = await api.post(API_CONFIG.ENDPOINTS.CUSTOMER_LOGIN, data);
  const token = response.headers['x-auth-token'];
  if (token) {
    await saveToken(token);
  }
  return response.data;
}

export async function logout() {
  await removeToken();
}

export async function checkLogin() {
  try {
    await api.get(API_CONFIG.ENDPOINTS.CUSTOMER_CHECK_LOGIN);
    return true;
  } catch {
    return false;
  }
}
