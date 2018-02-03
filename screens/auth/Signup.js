import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../../components/IconButton.js'

export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      head: 'SIGN UP',
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heading}>{this.state.head}</Text>
          <View>
            <IconButton
              icon="envelope-o"
              name="Sign up with Email"
              color="#3338C9"
              onPress = {() => this.props.navigation.navigate('SignupEmail')} />
            <IconButton
                icon="facebook"
                name="Sign up with Facebook"
                color="#3338C9"
                onPress = {() => this.setState({head: "Facebook Pressed!"})} />
          </View>
          <Text style={{color: '#8074d7'}}>Already have an account?</Text>
          <Text style={{color: '#b0a7f2'}} onPress= {() => this.props.navigation.goBack()}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: "#020b1c",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex:0.8,
    backgroundColor: "#041941",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
  },
  heading:{
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
