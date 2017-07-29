import React from 'react';
import {
  Easing,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder
} from 'react-native';

export default class Onboarding extends React.Component {

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: () => {}
    });
  }

  render() {
    return (
      <Animated.View style={this.props.style}
        {...this.panResponder.panHandlers}
      >
      	{this.props.children}
      </Animated.View>
    );
  }
}
