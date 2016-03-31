import { Validators } from 'angular2/common';
import { CustomValidators } from '../../../core/validators';

export class QuestionModel {

  questions: Array<any> = [];

  toGroup(): {[key: string]: any} {
    let group = {};
    const DEFAULT_VALIDATORS = {
      'required': Validators.required,
      'emailValidator': CustomValidators.emailValidator,
      'zipCodeValidator': CustomValidators.zipCodeValidator,
      'creditCardValidator': CustomValidators.creditCardValidator,
      'passwordValidator': CustomValidators.passwordValidator
    };
    this.questions.forEach(question => {
      group[question.key] = [ question.prefill ? question.prefill : '' ];

      let _validators = [];

      if (question.required) {
        _validators.push(DEFAULT_VALIDATORS.required);
      }
      if (question.emailValidator) {
        _validators.push(DEFAULT_VALIDATORS.emailValidator);
      }
      if (question.zipCodeValidator) {
        _validators.push(DEFAULT_VALIDATORS.zipCodeValidator);
      }
      if (question.creditCardValidator) {
        _validators.push(DEFAULT_VALIDATORS.creditCardValidator);
      }
      if (question.passwordValidator) {
        _validators.push(DEFAULT_VALIDATORS.passwordValidator);
      }
      group[question.key].push(Validators.compose(_validators));
    });

    return group;
  }
}