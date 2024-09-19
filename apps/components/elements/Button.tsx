import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, View } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  icon?: string;
}

export const ButtonDefault = ({ label, onPress, style, labelStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.content}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
});

