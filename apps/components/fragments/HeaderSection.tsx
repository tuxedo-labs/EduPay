import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup } from './ButtonGroup';
import { TextDefault } from '../elements/Text';
import { Images } from '../elements/Image';

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <Images uri='https://i.postimg.cc/v89BhFvQ/genshin-impact-hu-tao-pc-games-playstation-4-nintendo-3840x2160-5079.jpg' style={styles.ImageSection} />
      <TextDefault style={styles.head}>EduPay Apps</TextDefault>
      <TextDefault style={styles.description}>
        EduPay is your go-to solution for managing school payments seamlessly.
        Our platform provides a digital way to handle monthly school fees and
        other related payments with ease and security.
        Enjoy a streamlined payment experience and focus more on education while
        we take care of the transactions.
      </TextDefault>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  head: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: '#666',
  },
  ImageSection: {
    width: '100%',
    height: 200
  }
});

export default HeaderSection;

