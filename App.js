import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';
import CircleTransition from './CircleTransition';

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
    this.setState({
      _counter: newCounter
    }, () => {
      this.circleTransition.start(screens[newCounter].bgcolor);
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={[styles.container, {backgroundColor: this.state.currentbg}]}>
          <CircleTransition
            ref={(circle) => { this.circleTransition = circle }}
          />
        </View>
      </TouchableWithoutFeedback>
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
