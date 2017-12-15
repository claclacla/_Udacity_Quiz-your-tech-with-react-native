import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { gray, white } from './utils/colors';
import { Constants } from 'expo';
import * as PubSubJs from 'pubsub-js';
import { AsyncStorage } from 'react-native'

//AsyncStorage.clear();

import DecksAsyncStorageRepository from './repositories/AsyncStorage/DecksAsyncStorageRepository';
import Decks from './components/Decks';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import Score from './components/Score';

var decksAsyncStorageRepository = new DecksAsyncStorageRepository();

var decks = [
  {
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
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
];

const Tabs = TabNavigator({
  Decks: {
    screen: props => <Decks decksRepository={decksAsyncStorageRepository} {...props} />,
    navigationOptions: {
      tabBarLabel: 'Decks',
      //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: props => <AddDeck decksRepository={decksAsyncStorageRepository} {...props} />,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      //tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: gray,
      inactiveTintColor: gray,
      style: {
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  });

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {

    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {

    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {

    }
  },
  Score: {
    screen: Score,
    navigationOptions: {

    }
  }
})

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={white} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});