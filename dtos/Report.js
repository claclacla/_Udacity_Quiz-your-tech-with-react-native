class Report {
  constructor(questions) {
    if(questions === undefined) {
      throw new Error("questions is a required field");
    }

    this.questions = questions;
    this.responses = [];
  }
}

export default Report