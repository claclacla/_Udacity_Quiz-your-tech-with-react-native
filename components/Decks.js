import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import * as PubSubJs from 'pubsub-js';

var decks = {
  "React": {
    key: "React",
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  "Javascript": {
    key: "Javascript",
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

function DeckListItem({ title, questions }) {
  return (
    <View key={title} style={styles.deckListItem}>
      <Text style={styles.deckListItemTitle}>{title} ({questions.length})</Text>
    </View>
  )
}

class Decks extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    PubSubJs.subscribe("decks.updated", () => {
      this.props.decksRepository.get().then((decks) => {
        this.setState({ decks });
      });
    });
  }

  renderItem({ item }) {
    return <DeckListItem {...item} />
  }

  render() {
    return (
      <View>
        <FlatList data={Object.values(this.state.decks)} renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckListItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  deckListItemTitle: {
    fontSize: 19
  }
});

export default Decks