import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const ResetForm = t.struct({
  password: t.String,
  confirmPassword: t.String,
});

const options = {
  fields: {
    password: {
      label: "Enter new password",
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
    confirmPassword: {
      label: "Confirm new password",
      secureTextEntry: true,
      autoCapitalize: 'none',
    }
  },
};

export default class Rpass extends React.Component {

  handleLogin = () => {
    const formData = this.formRef.getValue()
    if (formData != null) {
      this.setState({text: "Logging in"})
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heading}>RESET PASSWORD</Text>
          <Text style={{color: '#8074d7', marginBottom: 25}}>Hello! Reset your password</Text>
          <View style={{width: 250}}>
            <Form
              ref={c => this.formRef=c}
              type={ResetForm}
              options={options} />
            <Button title="RESET PASSWORD" onPress={this.handleLogin} color="#3338C9"/>
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
