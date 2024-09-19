import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import HeaderSection from '../fragments/HeaderSection';
import { ButtonDefault } from '../elements/Button';

export default function HomeLayout() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <HeaderSection />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Masukan NISN atau Nama siswa</Text>
        <View style={styles.InputSection}>
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="NISN or Name"
            style={styles.input}
          />
          <ButtonDefault
            label='Cari'
            onPress={() => console.log('Searching for:', inputValue)}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  inputContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  InputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginLeft: 10,
  },
});

