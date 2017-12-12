import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import * as PubSubJs from 'pubsub-js';

import Question from "../dtos/Question"

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      answer: ""
    };

    this.decksRepository = this.props.navigation.state.params.decksRepository;
    this.deckTitle = this.props.navigation.state.params.deckTitle;
    this.updateDeckDetail = this.props.navigation.state.params.updateDeckDetail;
  }

  add = () => {
    let question = new Question(this.state.text, this.state.answer);

    this.decksRepository.getById(this.deckTitle).then((deck) => {
      deck.questions.push(question);

      this.decksRepository.update(this.deckTitle, deck).then(() => {
        PubSubJs.publish("decks.updated");
        this.updateDeckDetail();
        this.props.navigation.goBack();
      }); 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cardTitleLabel}>Add a new card</Text>
        <TextInput
          value={this.state.text}
          style={styles.cardText}
          placeholder="Question"
          onChangeText={(text) => this.setState({ text })}
        />
        <TextInput
          value={this.state.answer}
          style={styles.cardAnswer}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({ answer })}
        />
        <TouchableHighlight style={styles.addBtn} onPress={this.add} underlayColor="#888">
          <Text style={styles.addBtnText}>Submit</Text>
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
  cardTitleLabel: {
    fontSize: 21
  },
  cardText: {
    marginTop: 20,
    fontSize: 21,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 0
  },
  cardAnswer: {
    marginTop: 20,
    fontSize: 21,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 0
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
  }
});

export default AddCard