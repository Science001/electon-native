import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

export default class VoteTab extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      elections: [
        {
            "" : ""
        }
      ],
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://api.fortune22.hasura-app.io/events/running')
    .then(function(response) {
      console.log(response);
      self.setState({
        elections: response.data.data,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  renderElectionCard = ({item}) => (
    <TouchableOpacity
      style={styles.electionCard}
      onPress={() => this.props.navigation.navigate('Pop',{
        election: item.title,
        nominationData: item.nominationData,
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
          <Text style={styles.headerText}>Vote</Text>
        </View>
        <FlatList
          data={this.state.elections}
          renderItem={this.renderElectionCard}
          keyExtractor={(item) => item.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  electionCard: {
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
