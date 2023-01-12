import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

const test = async () => {
  const result = await AsyncStorage.getItem('user_information');
  const data = JSON.parse(result) || {currentNumber: 0, items: []};
  console.log(data.items, 'jjangna');
  return data.items;
};

const ListBox = () => {
  const navagation = useNavigation();
  const [items, setItems] = useState(test() || []);

  return (
    <>
      {Object.keys(items).map(item => {
        return (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navagation.navigate('PastQuestionConatiner')}>
            <Text style={styles.dateText}>01.11</Text>
            <Text style={styles.questionText} numberOfLines={1} ellipsizeMode="tail">
              {item.question}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#191970',
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  dateText: {
    fontSize: 18,
    color: '#696969',
    marginRight: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#191970',
    width: '65%',
  },
});

export default ListBox;
