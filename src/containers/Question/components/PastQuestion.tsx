import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Question = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.numText}>이제 무엇을 코딩해야 할까요?</Text>
      </View>
      <View style={styles.containerLine} />
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
  },
});

export default Question;
