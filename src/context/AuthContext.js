import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin, checkLogin as apiCheckLogin, logout as apiLogout } from '../services/auth';
import { getToken } from '../services/storage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const stored = await getToken();
      if (stored) {
        const valid = await apiCheckLogin().catch(() => false);
        if (valid) {
          setToken(stored);
        } else {
          await apiLogout();
        }
      }
      setLoading(false);
    }
    init();
  }, []);

  async function login(credentials) {
    await apiLogin(credentials);
    const newToken = await getToken();
    setToken(newToken);
  }

  async function logout() {
    await apiLogout();
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
