import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BallAnimation} from './components/ball.animation';

export default function App() {
  return (
    <View style={styles.root}>
      <BallAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
