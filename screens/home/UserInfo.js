import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage} from 'react-native';
import axios from 'axios';

export default class UserInfo extends Component {
    constructor(props) {
    super(props);
    this.state = {
       name:'',
       pic : { uri: 'null'},
       latestElection:'',
       noOfElectionsWon: null,
     }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://api.fortune22.hasura-app.io/users')
    .then(function(response) {
      console.log(response);
      self.setState({
        name: response.data.data.name,
        pic: {uri: response.data.data.avatar},
        latestElection: response.data.data.latest,
        noOfElectionsWon: response.data.data.score,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  logout = () => {
    AsyncStorage.removeItem('HASURA_AUTH_TOKEN');
    this.setState({
      name:'You are logged out.',
      latestElection:'Please restart application.',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>About You</Text>
          <Button title="LOG OUT" color="#041941" onPress={this.logout} />
        </View>
        <Image source={this.state.pic} style={styles.image} resizeMode="cover"/>
        <View>
          <View style={styles.box}>
            <Text style={styles.subtext}>Name</Text>
            <Text style={styles.text}>{this.state.name}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.subtext}>Latest Election</Text>
            <Text style={styles.text}>{this.state.latestElection}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.subtext}>Elections Won</Text>
            <Text style={styles.text}>{this.state.noOfElectionsWon}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#020b1c',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  },
  image:{
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 100,
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
  subtext: {
    fontSize: 15,
    marginLeft: 10,
    color:'#020b1c',
  },
});
