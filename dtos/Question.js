class Question {
  constructor(text, response, correct) {
    if(text === undefined) {
      throw new Error("text is a required field");
    }

    if(response === undefined) {
      throw new Error("response is a required field");
    }

    if(correct === undefined) {
      throw new Error("correct is a required field");
    }

    this.text = text;
    this.response = response;
    this.correct = correct;
  }
}

export default Question