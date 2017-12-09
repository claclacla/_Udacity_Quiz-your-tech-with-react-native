import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import * as PubSubJs from 'pubsub-js';
import PropTypes from 'prop-types';

function DeckListItem({ title, questions }) {
  return (
    <View key={title} style={styles.deckListItem}>
      <Text style={styles.deckListItemTitle}>{title} ({questions.length})</Text>
    </View>
  )
}

class Decks extends Component {
  static propTypes = {
    decksRepository: PropTypes.object.isRequired
  }

  state = {
    decks: {}
  }

  getDecks() {
    this.props.decksRepository.get().then((decks) => {
      this.setState({ decks });
    });
  }

  componentDidMount() {
    this.getDecks();

    PubSubJs.subscribe("decks.updated", () => {
      this.getDecks();
    });
  }

  renderItem({ item }) {
    return <DeckListItem {...item} />
  }

  render() {
    if (Object.keys(this.state.decks).length === 0) {
      return (
        <View style={styles.emptySentenceContainer}>
          <Text style={styles.emptySentence}>Add your first deck!</Text>
        </View>
      )
    }

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
    fontSize: 21
  },
  emptySentenceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptySentence: {
    fontSize: 21
  }
});

export default Decks