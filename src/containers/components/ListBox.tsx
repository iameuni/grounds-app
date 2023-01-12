import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TouchableOpacity} from 'react-native-gesture-handler';

const ListBox = () => {
  const navagation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('user_information', (_err, result) => {
      setItems((JSON.parse(result) || {items: []}).items);
    });
  }, []);

  return (
    <>
      {Object.keys(items).map(key => {
        return (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navagation.navigate('PastQuestionConatiner')}>
            <Text style={styles.dateText}>{items[key].date}</Text>
            <Text style={styles.questionText} numberOfLines={1} ellipsizeMode="tail">
              {items[key].question}
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
