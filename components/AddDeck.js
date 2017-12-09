import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class AddDeck extends Component {
  static propTypes = {
    decksRepository: PropTypes.object.isRequired
  }

  state = {
    title: ""
  }

  add() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.deckTitleLabel}>Add a new deck</Text>
        <TextInput
          style={styles.deckTitle}
          placeholder="Deck title"
          onChangeText={(title) => this.setState({ title })}
        />
        <TouchableHighlight style={styles.addBtn} onPress={this.add} underlayColor="#888">
          <Text style={styles.addBtnText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
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
  deckTitle: {
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

export default AddDeck