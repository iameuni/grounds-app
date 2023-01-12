import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionContainer from '../containers/QuestionContainer';
import ListContainer from '../containers/ListContainer';
import PastQuestionContainer from '../containers/PastQuestionContainer';

type RootStackParams = {
  QuestionContainer: undefined;
  ListContainer: undefined;
  PastQuestionConatiner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionContainer" screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="QuestionContainer"
          component={QuestionContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListContainer"
          component={ListContainer}
          options={{
            title: '기록',
            headerStyle: {
              backgroundColor: '#EBE2D0',
            },
            headerTintColor: '#191970',
            headerBackTitle: '',
          }}
        />
        <Stack.Screen
          name="PastQuestionConatiner"
          component={PastQuestionContainer}
          options={{
            title: '기록',
            headerStyle: {
              backgroundColor: '#EBE2D0',
            },
            headerTintColor: '#191970',
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
