import { Validators } from '@angular/forms';
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
      'passwordValidator': CustomValidators.passwordValidator,
      'stringValidator': CustomValidators.stringValidator
    };
    this.questions.forEach(question => {
      group[question.key] = [ question.prefill ? question.prefill : '' ];

      let _validators = [];

      for(let key in question.validators) {
        if (DEFAULT_VALIDATORS.hasOwnProperty(key)) {
          _validators.push(DEFAULT_VALIDATORS[key])
        }
      }
      
      group[question.key].push(Validators.compose(_validators));
    });
    
    return group;
  }
}