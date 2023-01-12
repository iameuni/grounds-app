import React, {useEffect, useState} from 'react';
import {
  AsyncStorage,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import QuestionNumber from './components/QuestionNumber';
import List from './components/List';
import Question from './components/Question';
import Save from './components/Save';

const QuestionContainer = () => {
  const [mode, setMode] = useState('write');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    console.log('a', answer, typeof answer);
    if (mode === 'save' && answer && answer.length > 0) {
      const item = {
        date,
        question,
        answer,
      };
      console.log('dddd', item);
      AsyncStorage.getItem('user_information', (_err, result) => {
        let data = JSON.parse(result) || {currentNumber: 0, items: []};
        console.log(data, 'data', data.items);
        data.items.push(item);
        data.currentNumber += 1;
        AsyncStorage.setItem('user_information', JSON.stringify(data), () => {
          console.log('저장');
          data.currentNumber += 1;
        });
      });
    }
  }, [mode]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.questionNumberContainer}>
          <View style={styles.marginTop} />
          <QuestionNumber />
          <List />
        </View>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding', android: undefined})}
        style={styles.avoid}>
        <Question mode={mode} answer={answer} setAnswer={setAnswer} />
        <Save mode={mode} setMode={setMode} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE2D0',
  },
  marginTop: {
    width: '100%',
    height: 30,
    backgroundColor: '#EBE2D0',
  },
  questionNumberContainer: {
    width: '100%',
  },
  avoid: {
    flex: 1,
  },
});

export default QuestionContainer;
