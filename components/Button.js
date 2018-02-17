import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  render() {
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#3338C9",
  },
  text: {
    color: "#ffffff",
    textAlign: 'center',
    fontWeight: 'bold',
  }
})
