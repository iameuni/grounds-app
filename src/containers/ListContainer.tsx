import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListBox from './components/ListBox';

const ListContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListContainer;
