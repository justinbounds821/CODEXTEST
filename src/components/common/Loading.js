import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../utils/constants';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md
  }
});
