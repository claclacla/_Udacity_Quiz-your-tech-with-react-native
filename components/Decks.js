import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

var decks = [
  {
    key: 'React',
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
  {
    key: 'JavaScript',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
];

function DeckListItem({ title, questions }) {
  return (
    <View key={title} style={styles.deckListItem}>
      <Text style={styles.deckListItemTitle}>{title} ({questions.length})</Text>
    </View>
  )
}

class Decks extends Component {
  renderItem({ item }) {
    return <DeckListItem {...item} />
  }

  render() {
    return (
      <View>
        <FlatList data={decks} renderItem={this.renderItem} />
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