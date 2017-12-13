class Question {
  constructor(text, answer, correct) {
    if(text === undefined) {
      throw new Error("text is a required field");
    }

    if(answer === undefined) {
      throw new Error("answer is a required field");
    }

    if(correct === undefined) {
      throw new Error("correct is a required field");
    }

    this.text = text;
    this.answer = answer;
    this.correct = correct;
  }
}

export default Question