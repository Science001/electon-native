import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const FpassForm = t.struct({
  email: t.String,
});

const options = {
  fields: {
    email: {
      label: "Email ID",
      autoCapitalize: 'none',
    },
  },
};

export default class Fpass extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      head: "FORGOT PASSWORD",
      subline: "Submit your email to reset your password",
    }
  }

  handlePress = () => {
    const formData = this.formRef.getValue()
    if (formData != null) {
      this.setState({head: "Sending Email"})
      var comp = this
      var url = "https://auth.fortune22.hasura-app.io/v1/providers/email/forgot-password";
      var requestOptions = {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json"
          }
      };
      var body = {
          "email": formData.email,
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
          subline: "Please check your inbox"
        });
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
              type={FpassForm}
              options={options} />
            <Button title="SEND EMAIL" onPress={this.handlePress} color="#3338C9"/>
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
