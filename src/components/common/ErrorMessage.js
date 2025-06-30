import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../utils/constants';

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.error,
    marginBottom: SPACING.md
  }
});
