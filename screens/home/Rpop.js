import React from 'react';
import { WebView, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Rpop extends React.Component {

  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state;
    const _result = params.result;
    this.state = {
      result: _result,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="caret-left" size={30} color="#ffffff" onPress={() => this.props.navigation.goBack()}/>
          <Text style={styles.headerText}>Results</Text>
        </View>
        <View style={styles.resultCard}>
          <Text style={styles.title}>{this.state.result.event}</Text>
          <Text style={styles.name}>Winner: {this.state.result.details.winner.username}</Text>
          <WebView style={styles.file} initialScale={50} source={{uri: this.state.result.details.winner.submission}} />
          <View style={styles.description}>
            <Text>{this.state.result.details.winner.description}</Text>
          </View>
          <Text style={styles.content}>Votes: {this.state.result.details.winner.votes}</Text>

          <View style={styles.divider} />

          <Text style={styles.name}>You: {this.state.result.details.user.username}</Text>
          <WebView style={styles.file} initialScale={50} source={{uri: this.state.result.details.user.submission}} />
          <View style={styles.description}>
            <Text>{this.state.result.details.user.description}</Text>
          </View>
          <Text style={styles.content}>Votes: {this.state.result.details.user.votes}</Text>
        </View>
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
  resultCard: {
    margin: 25,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  file: {
    margin: 15,
    height: 1000,
    width: 1000,
  },
  description: {
    backgroundColor: "#d3d3d3",
    padding: 10,
    margin: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: '#3338C9',
    height: 2,
    marginTop: 5,
    marginBottom: 15,
  }
})
