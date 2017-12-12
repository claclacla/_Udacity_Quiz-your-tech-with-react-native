import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as PubSubJs from 'pubsub-js';

class DeckDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.navigation.state.params.title
    }

    this.decksRepository = this.props.navigation.state.params.decksRepository;

    this.getDeck();
  }

  getDeck() {
    this.decksRepository.getById(this.state.title).then((deck) => {
      this.setState({ deck });
    });
  }

  addCard = () => {
    this.props.navigation.navigate("AddCard", {
      decksRepository: this.decksRepository,
      deckTitle: this.state.title,
      updateDeckDetail: () => {
        this.getDeck();
      }
    });
  }

  startQuiz() {

  }

  render() {
    if (!this.state.deck) {
      return (
        <View style={styles.container}>
          <Text>Loading data...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitleLabel}>{this.state.deck.title}</Text>
        <Text style={styles.deckTitleAmount}>{this.state.deck.questions.length} cards</Text>
        <TouchableHighlight style={styles.addBtn} onPress={this.addCard} underlayColor="#555">
          <Text style={styles.addBtnText}>Add card</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.startQuiz} onPress={this.startQuiz} underlayColor="#888">
          <Text style={styles.startQuizText}>Start quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deckTitleLabel: {
    fontSize: 21
  },
  deckTitleAmount: {
    fontSize: 21
  },
  addBtn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    height: 40
  },
  addBtnText: {
    color: "#fff"
  },
  startQuiz: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    height: 40
  },
  startQuizText: {
    color: "#fff"
  }
});

export default DeckDetail