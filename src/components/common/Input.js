import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../utils/constants';

export default function Input(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    borderRadius: 4,
    marginBottom: SPACING.md
  }
});
