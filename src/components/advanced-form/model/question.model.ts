import { Validators } from 'angular2/common';

export class QuestionModel {
  questions: Array<any> = [];
  
  toGroup() {
    let group = {};
    
    this.questions.forEach(question => {
      group[question.key] = [''];
      if (question.required) {
        group[question.key].push(Validators.required);
      }
    });
    console.log('toGroup(): ', group);
    return group;
  }
}