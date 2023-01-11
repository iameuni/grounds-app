import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionContainer from '../containers/Question/QuestionContainer';
import ListContainer from '../containers/List/ListContainer';
import PastQuestionContainer from '../containers/Question/PastQuestionContainer';

type RootStackParams = {
  QuestionContainer: undefined;
  ListContainer: undefined;
  PastedQuestionContainer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionContainer" screenOptions={{headerShown: false}}>
        <Stack.Screen name="QuestionContainer" component={QuestionContainer} />
        <Stack.Screen name="ListContainer" component={ListContainer} />
        <Stack.Screen name="PastedQuestionContainer" component={PastQuestionContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
