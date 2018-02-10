import React from 'react';
import { FlatList, TouchableOpacity, WebView, Text, StyleSheet, View } from 'react-native';

export default class ResultsTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: [
        {
          "event": "Ironman pics",
          "details": {
            "winner": {
              "username": "Hyper",
              "filename": "Dope Ironman",
              "description": "This is the dopest ironman pic. So it should win.",
              "submission": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/220px-Iron_Man_bleeding_edge.jpg",
              "votes": 123,
            },
            "user": {
              "username": "gYpfSMWpXFf",
              "filename": "KmgnPmWM",
              "description": "ycxbzbIFbRGsymaB",
              "submission": "https://vignette.wikia.nocookie.net/ironman/images/2/21/47.jpg",
              "votes": 100,
            }
          }
        },
        {
          "event": "Ironman pics",
          "details": {
            "winner": {
              "username": "Hyper",
              "filename": "Dope Ironman",
              "description": "This is the dopest ironman pic. So it should win.",
              "submission": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/220px-Iron_Man_bleeding_edge.jpg",
              "votes": 123,
            },
            "user": {
              "username": "gYpfSMWpXFf",
              "filename": "KmgnPmWM",
              "description": "ycxbzbIFbRGsymaB",
              "submission": "https://vignette.wikia.nocookie.net/ironman/images/2/21/47.jpg",
              "votes": 123,
            }
          }
        },
      ],
    }
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
