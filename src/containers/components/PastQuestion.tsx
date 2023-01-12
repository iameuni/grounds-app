import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

interface Props {
  mode: string;
}

const PastQuestion = ({mode}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.numText}>오늘의 기분은?</Text>
      </View>
      <View style={styles.containerLine}>
        <TextInput style={styles.disabledInput} multiline={true} editable={mode === 'write'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  textContainer: {
    backgroundColor: '#EBE2D0',
    zIndex: 999,
    paddingHorizontal: 20,
  },
  numText: {
    fontSize: 20,
    color: '#191970',
    fontWeight: 'bold',
  },
  containerLine: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#191970',
    width: '100%',
    height: '90%',
    alignItems: 'center',
    position: 'absolute',
  },
  input: {
    marginTop: 25,
    padding: 20,
    fontSize: 18,
    lineHeight: 30,
    height: '90%',
    width: '100%',
    color: '#666666',
  },
  disabledInput: {
    marginTop: 25,
    padding: 20,
    fontSize: 18,
    lineHeight: 30,
    height: '90%',
    width: '100%',
  },
});

export default PastQuestion;
