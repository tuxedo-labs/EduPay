import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const Images = ({ uri, style }: Props) => {
  return <Image source={{ uri }} style={style} />;
};

