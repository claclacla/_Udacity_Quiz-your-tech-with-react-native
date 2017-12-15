import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const QUESTION = 1;
const ANSWER = 2;

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardSide: QUESTION,
      questionIndex: 0
    };

    this.decksRepository = this.props.navigation.state.params.decksRepository;
    this.deckTitle = this.props.navigation.state.params.deckTitle;
    this.deck = this.props.navigation.state.params.deck;
  }

  flipCard = () => {
    this.setState({ cardSide: this.state.cardSide === QUESTION ? ANSWER : QUESTION });
  }

  answerQuestion = () => {
    if((this.state.questionIndex + 1) === this.deck.questions.length) {
      return this.props.navigation.navigate("Score", {
        deck: this.deck,
        goBackToDeckDetail: () => this.props.navigation.goBack()
      });
    }

    this.setState({ questionIndex: this.state.questionIndex + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cardSide === QUESTION &&
          <View style={styles.flipContainer}>
            <Text style={styles.text}>{this.deck.questions[this.state.questionIndex].text}</Text>
            <TouchableHighlight style={styles.flipBtn} onPress={this.flipCard}>
              <Text style={styles.flipBtnText}>Show answer</Text>
            </TouchableHighlight>
          </View>
        }
        {this.state.cardSide === ANSWER &&
          <View style={styles.flipContainer}>
            <Text style={styles.text}>{this.deck.questions[this.state.questionIndex].answer}</Text>
            <TouchableHighlight style={styles.flipBtn} onPress={this.flipCard}>
              <Text style={styles.flipBtnText}>Show question</Text>
            </TouchableHighlight>
          </View>
        }
        <TouchableHighlight style={styles.correctBtn} onPress={this.answerQuestion} underlayColor="#15c11a">
          <Text style={styles.correctBtnText}>Correct</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.incorrectBtn} onPress={this.answerQuestion} underlayColor="#f44842">
          <Text style={styles.incorrectBtnText}>Incorrect</Text>
        </TouchableHighlight>
        <Text style={styles.questionStep}>Question {this.state.questionIndex + 1} of {this.deck.questions.length}</Text>
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
  text: {
    fontSize: 21
  },
  correctBtn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0da812",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    height: 40
  },
  correctBtnText: {
    color: "#fff"
  },
  incorrectBtn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7160e",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    height: 40
  },
  incorrectBtnText: {
    color: "#fff"
  },
  flipContainer: {
    alignItems: "center"
  },
  flipBtn: {

  },
  flipBtnText: {
    fontSize: 17,
    color: "#f44842"
  },
  questionStep: {
    marginTop: 20,
    fontSize: 17
  }
});

export default Quiz