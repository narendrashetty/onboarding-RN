import React, { Component, PropTypes } from 'react';
import { Easing, Modal, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

class CircleTransition extends Component {
  constructor (props) {
    super(props);

    this.state = {
      scale: new Animated.Value(0),
      color: '#ccc'
    };
  }

  start(color, callback) {
  	this.setState({
      color: color
    }, () => {
      this.animate(callback);
    });
  }

  animate(callback) {
    Animated.timing(this.state.scale, {
      toValue: 4,
      duration: this.props.duration,
      easing: this.props.easing
    }).start(() => {
      callback();
      this.hideCircle();
    });
  }

  hideCircle () {
    this.setState({
      scale: new Animated.Value(0)
    });
  }

  getLeftPosition () {
    const halfSize = this.props.size / 2;
    const halfWidth = width / 2;
    let marginHorizontalTopLeft = -halfSize;

    return marginHorizontalTopLeft + halfWidth;
  }

  getTopPosition () {
    const halfSize = this.props.size / 2;
    let marginVerticalTopLeft = -halfSize;

    return marginVerticalTopLeft + height;
  }

  render () {
    const {scale, color} = this.state;
    const { size } = this.props;
    let topPosition = this.getTopPosition();
    let leftPosition = this.getLeftPosition();
    return (
      <Animated.View style={{
        position: 'absolute',
        backgroundColor: color,
        top: topPosition,
        left: leftPosition,
        width: size,
        height: size,
        borderRadius: size / 2,
        transform: [{
          scale: scale
        }]
      }} />
    )
  }
}

CircleTransition.propTypes = {
  size: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.func,
}

CircleTransition.defaultProps = {
  size: Math.min(width, height) - 1,
  duration: 400,
  easing: Easing.linear
}

export default CircleTransition;