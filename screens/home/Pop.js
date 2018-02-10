import React from 'react';
import { View, Text, StyleSheet, WebView, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Pop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sayNominee: 'Nominees',
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const _electionTitle = params.election;
    const nominationData = params.nominationData;
    this.setState({
      electionTitle: _electionTitle,
      nominees: nominationData,
    });
  }

  handleUpvote = () => {this.setState({sayNominee: 'Upvoted'})}

  renderNomineeCard = ({item}) => (
    <View style={styles.nomineeCard}>
      <Text style={styles.otterName}>{item.username}</Text>
      <WebView style={styles.file} initialScale={50} source={{uri: item.file}} />
      <Text style={styles.otterName}>Description:</Text>
      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
      <Button title="UPVOTE" onPress={this.handleUpvote} color="#3338C9"/>
    </View>
  );

  render() {
    return(
      <View>
        <View style={styles.header}>
          <Icon name="caret-left" size={30} color="#ffffff" onPress={() => this.props.navigation.goBack()}/>
          <Text style={styles.headerText}>{this.state.electionTitle}</Text>
        </View>
        <View style={styles.haveNominee}>
          <Text style={styles.sayNominee}>{this.state.sayNominee}</Text>
        </View>
        <FlatList
          data={this.state.nominees}
          renderItem={this.renderNomineeCard}
          keyExtractor={(item) => item.username} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#041941',
    padding: 12,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    marginLeft: 20,
  },
  haveNominee: {
    backgroundColor: '#6FA0F6',
    padding: 12,
    marginBottom: 10,
  },
  sayNominee: {
    fontSize: 20,
    color: '#ffffff',
  },
  nomineeCard: {
    flex: 1,
    alignItems: 'stretch',
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  otterName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  file: {
    alignItems: 'stretch',
    margin: 15,
    height: 200,
  },
  description: {
    backgroundColor: "#d3d3d3",
    padding: 10,
    margin: 10,
  }
})
