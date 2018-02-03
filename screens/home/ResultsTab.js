import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class VoteTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
          {
              "eid": "#1",
              "title":"Selfie Contest",
              "winner":"Foo",
              "votes": 123,
          },
          {
              "eid":"#2",
              "title":"Audiophilia",
              "winner":"Foo",
              "votes": 123,
          },
          {
              "eid":"#3",
              "title":"Meme Wars",
              "winner":"Foo",
              "votes": 123,
          },
          {
              "eid":"#4",
              "title":"Art Battle",
              "winner":"Foo",
              "votes": 123,
          },
          {
              "eid":"#5",
              "title":"Pen up!",
              "winner":"Foo",
              "votes": 123,
          },
      ],
      pressed: false,
    }
  }

  showDetails = () => undefined

  renderResultCard = ({item}) => (
    <View style={styles.resultCard}>
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
      <Text>Winner: {item.winner}</Text>
      <Text>Votes: {item.votes}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Results</Text>
        </View>
        <View>
          <FlatList
            data={this.state.results}
            renderItem={this.renderResultCard}
            keyExtractor={(item) => item.eid} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultCard: {
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
