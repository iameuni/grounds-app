import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const List = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchContainer}
        onPress={() => navigation.navigate('ListContainer')}>
        <Text>
          <Icon name="bookmark" style={styles.penIcon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: '2%',
    top: '0%',
  },
  touchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  penIcon: {
    fontSize: 28,
    color: 'navy',
  },
});

export default List;
