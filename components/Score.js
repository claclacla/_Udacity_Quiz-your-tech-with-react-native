import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Score extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.state.params.deck;
  }

  goBackToDeck = () => {
    this.props.navigation.state.params.goBackToDeckDetail();
  }

  render() {
    return (
      <View>
        <Text>Your score: 65%</Text>
        <TouchableHighlight style={styles.correctBtn} onPress={this.goBackToDeck} underlayColor="#15c11a">
          <Text style={styles.correctBtnText}>Correct</Text>
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
  }
});

export default Score;