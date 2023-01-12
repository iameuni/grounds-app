import React, {useState} from 'react';
import {
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
        <Question mode={mode} />
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
