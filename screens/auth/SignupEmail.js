import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import t from 'tcomb-form-native';

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
      this.setState({head: "Signing you up"})
      var comp = this
      var url = "https://auth.fractiously70.hasura-app.io/v1/signup";
      var requestOptions = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        }
      };
      var body = {
        "provider": "email",
        "data": {
          "email": formData.email,
          "password": formData.password,
        }
      };
      requestOptions.body = JSON.stringify(body);

      fetch(url, requestOptions)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
        comp.setState({
          head: "Email Sent",
          subline: "Verify yourself with the link in your inbox"
        });
        // To save the auth token received to offline storage
        // var authToken = result.auth_token
        // AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);
      })
      .catch(function(error) {
        console.log('Request Failed:' + error);
      });
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heading}>{this.state.head}</Text>
          <Text style={{color: '#8074d7', marginBottom: 25}}>{this.state.subline}</Text>
          <View style={{width: 250}}>
            <Form
              ref={c => this.formRef=c}
              type={SignupForm}
              options={options} />
            <Button title="SIGN UP" onPress={this.handlePress} color="#3338C9"/>
          </View>
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
    marginBottom: 15,
  },
});
