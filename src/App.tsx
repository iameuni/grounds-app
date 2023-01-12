import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestionContainer from './containers/Question/QuestionContainer';
//import ListContainer from './containers/List/ListContainer';
//import MainStackNavigation from './navigation/MainStackNavigation';
//import PastQuestionContainer from './containers/Question/PastQuestionContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  AsyncStorage.setItem('nickname', 'User1', () => {
    console.log('유저 닉네임 저장 완료');
  });
  AsyncStorage.getItem('nickname', (_err, result) => {
    console.log(result); // User1 출력
  });
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
