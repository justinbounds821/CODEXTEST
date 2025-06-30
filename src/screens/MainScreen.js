import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import api from '../services/api';
import Loading from '../components/common/Loading';
import Button from '../components/common/Button';
import { SPACING, API_CONFIG } from '../utils/constants';
import { AuthContext } from '../context/AuthContext';

export default function MainScreen({ navigation }) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Logout" onPress={logout} />,
    });
  }, [navigation, logout]);

  async function fetchLocations() {
    setLoading(true);
    try {
      const { data } = await api.get(API_CONFIG.ENDPOINTS.LOCATIONS);
      setLocations(data);
    } catch (e) {
      console.log('Failed to fetch locations');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <FlatList
        data={locations}
        keyExtractor={item => String(item.id)}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchLocations} />}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md
  },
  item: {
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  name: {
    fontWeight: 'bold'
  }
});
