import React from 'react';
import { StyleSheet, View, Animated, Dimensions, Easing } from 'react-native';

const { width, height } = Dimensions.get('window');
const size = Math.min(width, height) - 1;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 4,
      duration: 1000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          position: 'absolute',
          backgroundColor: '#ccc',
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{
            scale: this.state.scale
          }]
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
