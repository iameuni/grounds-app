import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  mode: string;
  setMode: (arg0: string) => void;
}

const Save = ({mode, setMode}: Props) => {
  return (
    <View style={styles.container}>
      {mode === 'write' ? (
        <TouchableOpacity style={styles.touchContainer} onPress={() => setMode('save')}>
          <Text>
            <Icon name="circle" style={styles.circleIcon} />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchContainer} onPress={() => setMode('write')}>
          <Text>
            <Icon name="pencil" style={styles.penIcon} />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: '3%',
    right: '2%',
    position: 'absolute',
  },
  touchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  circleIcon: {
    fontSize: 15,
    color: '#191970',
  },
  penIcon: {
    fontSize: 25,
    color: '#191970',
  },
});

export default Save;
