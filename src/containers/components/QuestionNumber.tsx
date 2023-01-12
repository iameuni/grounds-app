import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const QuestionNumber = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>삼백육십다섯 번째 사유</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 17,
    color: '#191970',
  },
});

export default QuestionNumber;
