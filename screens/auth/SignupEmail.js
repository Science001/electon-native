import React from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage, KeyboardAvoidingView} from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

const Form = t.form.Form;

const SignupForm = t.struct({
  email: t.String,
  password: t.String,
  confirmPassword: t.String,
});

const options = {
  fields: {
    email: {
      label: "Enter Email",
      autoCapitalize: 'none',
    },
    password: {
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
    confirmPassword: {
      label: "Confirm Password",
      secureTextEntry: true,
      autoCapitalize: 'none',
    }
  },
};

export default class SignupEmail extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      head: "SIGN UP",
      subline: "Hello! Sign up with your Email"
    }
  }

  handlePress = () => {
    const formData = this.formRef.getValue()
    if (formData != null) {
      if(formData.password == formData.confirmPassword) {
        this.setState({head: "Signing you up"})
        var comp = this
        var url = "https://auth.fortune22.hasura-app.io/v1/signup";
        axios.post(url, {
          "provider": "email",
          "data": {
            "email": formData.email,
            "password": formData.password,
          }
        })
        .then(function(response) {
          console.log(response);
          comp.setState({
            head: "Email Sent",
            subline: "Verify with the link in your inbox and Login"
          });
        })
        .catch(function(error) {
          console.log('Request Failed:' + error);
          if(error.response) {
            if(error.response.status==400){
              if(error.response.data.code=="already-exists"){
                comp.setState({
                  head: "Seems familiar",
                  subline: "You're an existing user. Login!",
                });
              }
              else if(error.response.data.code=="invalid-email"){
                comp.setState({
                  head: "Invalid Email",
                  subline: "That doesn't look like an email address",
                });
              }
              else if(error.response.data.code=="invalid-password"){
                comp.setState({
                  head: "Invalid Password",
                  subline: "Minimum password length is 8 characters",
                });
              }
              else {
                comp.setState({
                  head: "Something's Wrong",
                  subline: "Please try again",
                });
              }
            }
            else {
              comp.setState({
                head: "Something's Wrong",
                subline: "Please try again",
              });
            }
          }
          else {
            comp.setState({
              head: "Aw, Snap!",
              subline: "Please try again after a while",
            });
          }
        });
      }
      else{
        this.setState({
          head: "Passwords Mismatch",
          subline: "Try retyping your passwords without typos",
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.heading}>{this.state.head}</Text>
          <Text style={{color: '#8074d7', marginBottom: 25}}>{this.state.subline}</Text>
          <View style={{width: 250}}>
            <Form
              ref={c => this.formRef=c}
              type={SignupForm}
              options={options} />
            <Button title="SIGN UP" onPress={this.handlePress} color="#3338C9"/>
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
});
