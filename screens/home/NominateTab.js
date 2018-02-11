import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

export default class VoteTab extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      noms: [
        {
            "" : ""
        }
      ],
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://api.fortune22.hasura-app.io/events/open')
    .then(function(response) {
      console.log(response);
      self.setState({
        noms: response.data.data,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  renderNomCard = ({item}) => (
    <TouchableOpacity
      style={styles.nomCard}
      onPress={() => this.props.navigation.navigate('NPop',{
        nom: item,
      })}>
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.subtitle}</Text>
      <Text>{item.tags}</Text>
      <Text>Open for {item.deadline}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Nominate</Text>
        </View>
        <FlatList
          data={this.state.noms}
          renderItem={this.renderNomCard}
          keyExtractor={(item) => item.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaafa9',
    padding: 15,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  }
})
