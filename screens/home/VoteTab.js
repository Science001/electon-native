import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class VoteTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [
          {
              "eid": "#1",
              "title":"Selfie Contest",
              "subtitle":"Who the best looking?",
              "tags":["#faces","#selfies"]
          },
          {
              "eid":"#2",
              "title":"Audiophilia",
              "subtitle":"Anyone gonna rule the music league here?",
              "tags":["#recordings","#songs"]
          },
          {
              "eid":"#3",
              "title":"Meme Wars",
              "subtitle":"May the best meme win!",
              "tags":["#memes"]
          },
          {
              "eid":"#4",
              "title":"Art Battle",
              "subtitle":"Brush up for the battle of brushes and pencils.",
              "tags":["#drawing","#sketches","#painting","#art"],
          },
          {
              "eid":"#5",
              "title":"Pen up!",
              "subtitle":"Showcase your best articles/stories here.",
              "tags":["#writing","#stories","#articles"]
          },
      ],
      pressed: false,
    }
  }

  showDetails = () => undefined

  renderElectionCard = ({item}) => (
    <TouchableOpacity style={styles.electionCard} onPress={this.showDetails}>
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.subtitle}</Text>
      <Text>{item.tags}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Vote</Text>
        </View>
        <View>
          <FlatList
            data={this.state.elections}
            renderItem={this.renderElectionCard}
            keyExtractor={(item) => item.eid} />
        </View>
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
