import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';
import CircleTransition from './CircleTransition';
import Swipe from './Swipe';

const screens = [{
  id: 0,
  bgcolor: '#698FB2'
}, {
  id: 1,
  bgcolor: '#68B0B3'
}, {
  id: 2,
  bgcolor: '#9B91BA'
}]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _counter: 0,
      currentbg: screens[0].bgcolor
    };
  }

  onPress() {
    const { _counter } = this.state;
    let newCounter = _counter < screens.length - 1 ? _counter + 1 : 0;
    const newColor = screens[newCounter].bgcolor;
    this.setState({
      _counter: newCounter
    }, () => {
      this.circleTransition.start(newColor, this.changeColor.bind(this, newColor));
    });
  }

  changeColor(newColor) {
    this.setState({
      currentbg: newColor,
    });
  }

  render() {
    return (
      <Swipe 
        style={[styles.container, {backgroundColor: this.state.currentbg}]}
      >
        <CircleTransition
          ref={(circle) => { this.circleTransition = circle }}
        />
      </Swipe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
