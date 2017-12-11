class Question {
  constructor(text, answer) {
    if(text === undefined) {
      throw new Error("text is a required field");
    }

    if(answer === undefined) {
      throw new Error("answer is a required field");
    }

    this.answer = answer;
  }
}

export default Question