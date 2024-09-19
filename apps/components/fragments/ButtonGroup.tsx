import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonDefault } from '../elements/Button';

interface Props {
  buttons: { label: string, onPress: () => void }[];
}

export const ButtonGroup = ({ buttons }: Props) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <ButtonDefault key={index} label={button.label} onPress={button.onPress} style={styles.button} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    width: '45%',
  },
});
