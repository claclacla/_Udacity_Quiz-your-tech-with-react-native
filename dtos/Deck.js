class Deck {
  constructor(title) {
    if(title === undefined) {
      throw new Error("title is a required field");
    }

    this.title = title;
    this.questions = [];
  }
}

export default Deck