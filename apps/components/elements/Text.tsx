import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const TextDefault = ({ children, style }: Props) => {
  return <Text style={[styles.defaultText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#333',
  },
});
