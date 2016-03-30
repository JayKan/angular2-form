import { Validators } from 'angular2/common';
import { CustomValidators } from '../../../core/validators';

export class QuestionModel {
  questions: Array<any> = [];
  
  toGroup(): {[key: string]: any} {
    let group = {};
    this.questions.forEach(question => {
      group[question.key] = [''];
      console.log('each question: ', question);
      if (question.required) {
        group[question.key].push(Validators.required);
      }
      if (question.emailValidator) {
        group[question.key].push(CustomValidators.emailValidator);
      }
      if (question.zipCodeValidator) {
        group[question.key].push(CustomValidators.zipCodeValidator);
      }
      if (question.creditCardValidator) {
        group[question.key].push(CustomValidators.creditCardValidator);
      }
      if (question.passwordValidator) {
        group[question.key].push(CustomValidators.passwordValidator);
      }
    });
    console.log('toGroup(): ', group);
    return group;
  }
}