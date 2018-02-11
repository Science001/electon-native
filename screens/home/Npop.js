import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Npop extends React.Component {
  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state;
    const _nom = params.nom;
    this.state = {
      nom: _nom,
      picURL: 'https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Upload_Document-512.png',
      footer: 'Upload your file'
    }
  }

  handleUpload = () => {
    this.setState({
      picURL: 'https://www.thewrap.com/wp-content/uploads/2017/07/Robert-Downey-Jr-Iron-Man-Pepper-Potts-Tony-Stark.jpg',
      footer: 'File Uploaded',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="caret-left" size={30} color="#ffffff" onPress={() => this.props.navigation.goBack()}/>
          <Text style={styles.headerText}>Nominate</Text>
        </View>
        <View style={styles.nomCard}>
          <Text style={{fontWeight: 'bold'}}>{this.state.nom.title}</Text>
          <Text>{this.state.nom.subtitle}</Text>
          <Text>{this.state.nom.tags}</Text>
          <Text>Open for {this.state.nom.deadline}</Text>
        </View>
        <TouchableOpacity
          style={styles.upfile}
          onPress={this.handleUpload}>
          <Image style={styles.image} source={{uri: this.state.picURL}} />
        </TouchableOpacity>
        <View style={styles.box}>
          <Text style={styles.text}>{this.state.footer}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    margin: 15,
    backgroundColor: "#ffffff",
  },
  upfile: {
    height: 300,
    borderRadius: 5,
    margin: 15,
    backgroundColor: "#ffffff",
  },
  image: {
    alignItems: 'stretch',
    height: 300,
  },
  box: {
    padding: 10,
    backgroundColor: '#6FA0F6',
    marginBottom: 1,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color:'white',
  },
})
