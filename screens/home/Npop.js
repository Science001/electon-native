import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, WebView, TextInput, KeyboardAvoidingView } from 'react-native';
import { DocumentPicker } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button.js';

export default class Npop extends React.Component {
  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state;
    const _nom = params.nom;
    this.state = {
      nom: _nom,
      fileURL: '',
      fileName: '',
      fileSize: null,
      buttonText: 'Upload your nomination file',
    }
  }

  getFile = async () => {
    var result = await DocumentPicker.getDocumentAsync();
    console.log(result);
    if (result.type != 'cancel') {
      this.setState({
        fileURL: result.uri,
        fileName: result.name,
        fileSize: result.size,
        buttonText: 'CHANGE FILE',
      })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.header}>
          <Icon name="caret-left" size={30} color="#ffffff" onPress={() => this.props.navigation.goBack()}/>
          <Text style={styles.headerText}>Nominate</Text>
        </View>
        <View style={{flex:1, margin: 15}}>
          <View style={styles.nomCard}>
            <Text style={{fontWeight: 'bold'}}>{this.state.nom.title}</Text>
            <Text>{this.state.nom.subtitle}</Text>
            <Text>{this.state.nom.tags}</Text>
            <Text>Open for {this.state.nom.deadline}</Text>
          </View>

          {!!this.state.fileName &&
            <Text style={styles.text}>Selected File: {this.state.fileName}</Text>}
          {!!this.state.fileURL &&
            <WebView style={styles.webview} initialScale={1} source={{uri: this.state.fileURL}} />}

          <Button title={this.state.buttonText} onPress={this.getFile} />

          {!!this.state.fileURL &&
            <TextInput
              style={styles.input}
              placeholder="Give a description"
              placeholderTextColor="#e6e8f7"
              underlineColorAndroid="transparent"
              multiline={true}
              autoGrow={true}
              maxHeight={100}
              onChangeText={(text) => this.setState({description: text,})}
              />}

            {!!this.state.description &&
              <Button title="NOMINATE" onPress={this.handleSubmit} />}
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#020b1c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    marginLeft: 20,
  },
  nomCard: {
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#ffffff",
  },
  webview: {
    alignItems: 'stretch',
    margin: 15,
    height: 200,
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
    color:'white',
  },
  input: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#6FA0F6",
    borderColor: "#346bcb",
    color: '#ffffff',
  },
})
