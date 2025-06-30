import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { SPACING } from '../utils/constants';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  async function handleLogin() {
    if (!phone || !password) {
      setError('Please fill all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await login({ phone, password });
    } catch (e) {
      const message = e.response?.data?.message || 'Login failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic</Text>
      <Input placeholder="Email or Phone" value={phone} onChangeText={setPhone} />
      <Input placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <ErrorMessage message={error} />
      {loading ? <Loading /> : <Button title="Login" onPress={handleLogin} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING.lg
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: SPACING.lg
  }
});
