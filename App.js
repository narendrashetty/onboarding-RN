import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';
import CircleTransition from './CircleTransition';

export default class App extends React.Component {

  onPress() {
    this.circleTransition.animate();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={styles.container}>
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
    backgroundColor: '#fff'
  },
});
