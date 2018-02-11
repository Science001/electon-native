import React from 'react';
import { FlatList, TouchableOpacity, WebView, Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

export default class ResultsTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://api.fortune22.hasura-app.io/results')
    .then(function(response) {
      console.log(response);
      self.setState({
        results: response.data.data,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  renderResultCard = ({item}) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => this.props.navigation.navigate('RPop',{
        result: item,
      })}>
      <Text style={styles.title}>{item.event}</Text>
      <Text
        style={{
          backgroundColor: item.details.winner.votes===item.details.user.votes ? '#73c17b':'#d16e6e',
          marginTop: 20, padding: 12,}}>
        {item.details.winner.votes===item.details.user.votes ? 'Hurray! You won the election.' : 'Oops! You lost the election.'}
      </Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Results</Text>
        </View>
        <FlatList
          data={this.state.results}
          renderItem={this.renderResultCard}
          keyExtractor={(item) => item.event} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  resultCard: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
