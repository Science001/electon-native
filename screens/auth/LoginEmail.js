import React from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage, KeyboardAvoidingView} from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

const Form = t.form.Form;

const LoginForm = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      label: "Email ID",
      autoCapitalize: 'none',
    },
    password: {
      secureTextEntry: true,
      autoCapitalize: 'none',
    }
  },
};

export default class LoginEmail extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      head: "LOGIN",
      subhead: "Hello! Login with your Email",
    }
  }


  handlePress = () => {
    const formData = this.formRef.getValue()
    if (formData != null) {
      this.setState({head: "Logging you in"})
      var comp = this
      var url = "https://auth.fortune22.hasura-app.io/v1/login";
      axios.post(url, {
        "provider": "email",
        "data": {
          "email": formData.email,
          "password": formData.password,
        }
      })
      .then(function(response) {
        console.log(response);
        var authToken = response.data.auth_token
        AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);
        comp.setState({
          head: "Logged in"
        });
        comp.props.navigation.navigate('Home');
      })
      .catch(function(error) {
        console.log('Request Failed:' + error);
        if(error.response) {
          if(error.response.status==400){
            comp.setState({
              head: "Invalid Credentials",
              subhead: "Your Email / Password is incorrect",
            });
          }
          else {
            comp.setState({
              head: "Something's Wrong",
              subhead: "Please try again",
            });
          }
        }
        else {
          comp.setState({
            head: "Aw, Snap!",
            subhead: "Please try again after a while",
          });
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.heading}>{this.state.head}</Text>
          <Text style={{color: '#8074d7', marginBottom: 25}}>{this.state.subhead}</Text>
          <View style={{width: 250}}>
            <Form
              ref={c => this.formRef=c}
              type={LoginForm}
              options={options} />
            <Text style={styles.fpass} onPress= {() => this.props.navigation.navigate('Fpass')}>Forgot Password?</Text>
            <Button title="LOGIN" onPress={this.handlePress} color="#3338C9"/>
          </View>
        </KeyboardAvoidingView>
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
    marginBottom: 15,
  },
  fpass: {
    color: '#6FA0F6',
    paddingLeft: 5,
    marginBottom: 15,
  },
});
