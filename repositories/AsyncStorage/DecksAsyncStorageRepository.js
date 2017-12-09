import { AsyncStorage } from 'react-native'

import { DECKS_COLLECTION } from '../../data'
 
class DecksAsyncStorageRepository {
  add(deck) {
    deck.key = deck.title;

    return AsyncStorage.mergeItem(DECKS_COLLECTION, JSON.stringify({
      [deck.title]: deck 
    }));
  }

  get() {
    return AsyncStorage.getItem(DECKS_COLLECTION).then((decksJsonString) => {
      let decks = JSON.parse(decksJsonString);
      return decks;
    })
  }
}

export default DecksAsyncStorageRepository
