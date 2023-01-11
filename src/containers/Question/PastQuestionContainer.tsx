import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import QuestionNumber from './components/QuestionNumber';
import PastQuestion from './components/PastQuestion';

const PastQuestionContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionNumberContainer}>
        <QuestionNumber />
      </View>
      <PastQuestion />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionNumberContainer: {
    width: '100%',
  },
});

export default PastQuestionContainer;
