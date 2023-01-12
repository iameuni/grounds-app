import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import QuestionContainer from './containers/QuestionContainer';
//import ListContainer from './containers/ListContainer';
import MainStackNavigation from './navigation/MainStackNavigation';
//import PastQuestionContainer from './containers/PastQuestionContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainStackNavigation />
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
