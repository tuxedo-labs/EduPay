import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Images } from '../elements/Image';
import { TextDefault } from '../elements/Text';

interface Props {
  name: string;
  avatarUri: string;
}

export const AvatarWithText = ({ name, avatarUri }: Props) => {
  return (
    <View style={styles.container}>
      <Images uri={avatarUri} style={styles.avatar} />
      <TextDefault style={styles.name}>{name}</TextDefault>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
