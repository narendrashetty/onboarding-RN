import React from 'react';
import {
  Easing,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder
} from 'react-native';

const swipeDirections = {
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT'
};

function isValidSwipe(velocity, velocityThreshold, directionalOffset, directionalOffsetThreshold) {
  return Math.abs(velocity) >= velocityThreshold && 
  Math.abs(directionalOffset) < directionalOffsetThreshold;
}

export default class Onboarding extends React.Component {

  constructor(props) {
    super(props);

    this.swipeConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        const swipeDirection = this._getSwipeDirection(gestureState);
        console.log(swipeDirection);
      }
    });
  }

  _getSwipeDirection(gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    const {dx, dy} = gestureState;
    if (this._isValidHorizontalSwipe(gestureState)) {
      return (dx > 0) ? SWIPE_RIGHT : SWIPE_LEFT;
    }
  }

  _isValidHorizontalSwipe(gestureState) {
    const {vx, dy} = gestureState;
    const {velocityThreshold, directionalOffsetThreshold} = this.swipeConfig;
    return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
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
