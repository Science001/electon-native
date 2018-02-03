import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View } from 'react-native'

export default class IconButton extends React.Component {
  render() {
    return(
      <View style={styles.button}>
        <Icon.Button
          name={this.props.icon}
          backgroundColor={this.props.color}
          iconStyle= {{marginLeft: 10}}
          onPress={this.props.onPress}>

          <Text style={styles.text}>{this.props.name}</Text>

        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 25,
  },
  text: {
    color:"#FFFFFF",
    fontSize: 18,
    padding: 10,
  }
})
