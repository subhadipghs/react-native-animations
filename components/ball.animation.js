import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

function BallAnimation() {
  const value = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(value, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [value]);

  return (
    <View>
      <Animated.View style={{opacity: value}}>
        <View style={styles.ball}></View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'blue',
  },
});

export {BallAnimation};
