import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class VoteTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [
          {
              "title":"Selfie Contest",
              "subtitle":"Who the best looking?",
              "tags":"#faces #selfies",
              "deadline": 5,
              "nominationData": [
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Please Upvote! _/\\_",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "This is an audio file.",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Video. Just for a demo that it can render all file types. Else, one election will only have one file typed nominations.",
                },
              ],
          },
          {
              "title":"Audiophilia",
              "subtitle":"Anyone gonna rule the music league here?",
              "tags": "#recordings #songs",
              "deadline": 5,
              "nominationData": [
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Blah Blah Blah",
                },
              ],
          },
          {
              "title":"Meme Wars",
              "subtitle":"May the best meme win!",
              "tags":"#memes",
              "deadline": 5,
              "nominationData": [
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Please Upvote! _/\\_",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "This is an audio file.",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Video. Just for a demo that it can render all file types. Else, one election will only have one file typed nominations.",
                },
              ],
          },
          {
              "title":"Art Battle",
              "subtitle":"Brush up for the battle of brushes and pencils.",
              "tags": "#drawing #sketches #painting #art",
              "deadline": 5,
              "nominationData": [
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Blah Blah Blah",
                },
              ],
          },
          {
              "title":"Pen up!",
              "subtitle":"Showcase your best articles/stories here.",
              "tags": "#writing #stories #articles",
              "deadline": 5,
              "nominationData": [
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Please Upvote! _/\\_",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "This is an audio file.",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Video. Just for a demo that it can render all file types. Else, one election will only have one file typed nominations.",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://www.montereybayaquarium.org/-/m/images/animal-guide/marine-mammals/sea-otter-mom-pup.jpg?mh=916&mw=1222&usecustomfunctions=1&centercrop=1",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                  "description": "Blah Blah Blah",
                },
                {
                  "username": "Voter Otter",
                  "file": "http://techslides.com/demos/sample-videos/small.mp4",
                  "description": "Blah Blah Blah",
                },
              ],
          },
      ],
    }
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
      <Text>Open for {item.deadline} more day(s)</Text>
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
