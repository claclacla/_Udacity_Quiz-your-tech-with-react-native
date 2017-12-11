import { AsyncStorage } from 'react-native'

import { DECKS_COLLECTION } from '../../data'
import Deck from '../../dtos/Deck'

class DecksAsyncStorageRepository {
  add(deck) {
    return new Promise((resolve, reject) => {
      if (!deck instanceof Deck) {
        reject();
      }

      deck.key = deck.title;

      AsyncStorage.mergeItem(DECKS_COLLECTION, JSON.stringify({
        [deck.title]: deck
      }), () => {
        resolve();
      });
    });
  }

  get() {
    return AsyncStorage.getItem(DECKS_COLLECTION).then((decksJsonString) => {
      if (decksJsonString === null) {
        return {};
      }

      let decks = JSON.parse(decksJsonString);

      return decks;
    })
  }

  getById(id) {
    return AsyncStorage.getItem(DECKS_COLLECTION).then((decksJsonString) => {
      if (decksJsonString === null) {
        return {};
      }

      let decks = JSON.parse(decksJsonString);

      return decks[id];
    })
  }
}

export default DecksAsyncStorageRepository
