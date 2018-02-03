import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class UserInfo extends Component {
    constructor(props) {
    super(props);
    this.state = {
       name:'Otter',
       pic : { uri: 'https://www.doi.gov/sites/doi.gov/files/uploads/seaotterkodiaknwrlisahuppusfws.jpg'},
       latestElection:'Best Swimmer',
       noOfElectionsWon: 7,
     }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>About You</Text>
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
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  },
  image:{
    height: 300,
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 150,
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
  }
});
