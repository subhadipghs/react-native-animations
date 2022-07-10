import React from 'react';
import {Button, Text, Animated, StyleSheet, View, Easing} from 'react-native';

function BallAnimation() {
  const opacity = React.useRef(new Animated.Value(0)).current;

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const animation = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      easing,
      duration: 2500,
    }).start();
  };

  return (
    <View>
      <View style={{marginBottom: 10}}>
        <Button
          title="Press Me"
          onPress={() => animation(Easing.quad)}></Button>
      </View>
      <Animated.View
        style={[
          styles.ball,
          {opacity, height: size, width: size},
        ]}></Animated.View>
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
