import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import AuthProvider from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </AuthProvider>
  );
}
