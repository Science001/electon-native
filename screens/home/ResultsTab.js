import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class ResultsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        "title":"Selfie Contest",
        "winner":"Otter",
        "winnerScore": 123,
        "yourScore": 123,
      },
      so: {
        text: '',
        color: '',
      },
    }
  }

  componentWillMount() {
    var { winnerScore, yourScore } = this.state.results
    var _text = winnerScore===yourScore ? 'Hurray! You won the election.' : 'Oops! You lost the election.'
    var _color = winnerScore===yourScore ? '#73c17b' : '#d16e6e'
    this.setState({
      so: {
        text: _text,
        color: _color,
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Results</Text>
        </View>
        <View style={styles.resultCard}>
          <Text style={styles.title}>{this.state.results.title}</Text>
          <Text style={styles.content}>Winner: {this.state.results.winner}</Text>
          <Text style={styles.content}>Votes: {this.state.results.winnerScore}</Text>
          <Text style={styles.doubleSpace}>Your Votes: {this.state.results.yourScore}</Text>
          <Text style={{backgroundColor: this.state.so.color, marginTop: 20, padding: 12,}}>{this.state.so.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#020b1c',
  },
  resultCard: {
    margin: 25,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  doubleSpace: {
    fontSize: 16,
    marginTop: 20,
  },
})
