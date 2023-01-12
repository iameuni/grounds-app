import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListBox = () => {
  const navagation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navagation.navigate('PastQuestionConatiner')}>
        <Text style={styles.dateText}>01.11</Text>
        <Text style={styles.questionText} numberOfLines={1} ellipsizeMode="tail">
          오늘의 기분은?
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.dateText}>01.12</Text>
        <Text style={styles.questionText} numberOfLines={1} ellipsizeMode="tail">
          만약에 내가 박아윤으로 하루를 살 수 있다면?
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.dateText}>01.13</Text>
        <Text style={styles.questionText} numberOfLines={1} ellipsizeMode="tail">
          디자인을 어케 할까요?
        </Text>
      </View>
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
