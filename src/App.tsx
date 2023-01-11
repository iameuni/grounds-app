import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestionContainer from './containers/Question/QuestionContainer';
//import ListContainer from './containers/List/ListContainer';
//import MainStackNavigation from './navigation/MainStackNavigation';
//import PastQuestionContainer from './containers/Question/PastQuestionContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QuestionContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE2D0',
  },
});

export default App;
