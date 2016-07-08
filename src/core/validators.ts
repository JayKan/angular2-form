
import { Directive, forwardRef, provide, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    provide(NG_VALIDATORS, { useExisting: forwardRef(() => EqualValidator), multi: true })
  ]
})
export class EqualValidator implements Validator {

  constructor(@Attribute('validateEqual') public validateEqual: string,
              @Attribute('reverse') public reverse: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let v = c.value;

    // control value
    let e = c.root.find(this.validateEqual);

    // value not equal
    if (e && v !== e.value && !this._isReverse) {
      return {
        validateEqual: false
      };
    }

    // value equal and reverse
    if (e && v === e.value && this._isReverse) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this._isReverse) {
      e.setErrors({
        validateEqual: false
      })
    }
    return null;
  }

  private get _isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true: false;
  }
}


export class CustomValidators {

  static getValidatorErrorMessage(code: string, description: string = 'Current field'): string {
    let config = {
      'required': `${description} is required`,
      'invalidCreditCard': 'Credit Card number is invalid',
      'invalidEmailAddress': 'Email address is invalid',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'invalidStringValidator': `${description} can't contain any numbers or any special characters`
    };
    return config[code];
  }

  static zipCodeValidator(control): any {
    // 5 digits numbers only
    let valid: boolean = /^\d{5}$/.test(control.value); 
    return valid ? null : {'invalidZip': true};
  }

  static creditCardValidator(control): any {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    let valid: boolean = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(control.value);
    return valid ? null : {'invalidCreditCard': true};
  }

  static emailValidator(control): any {
    // RFC 2822 compliant regex
    let valid: boolean = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(control.value);
    return valid ? null : {'invalidEmailAddress': true};

  }
  
  static stringValidator(control): any {
    let valid: boolean = /^[a-zA-Z-\']+$/.test(control.value);
    return valid ? null : {'invalidStringValidator': true};
  }
  
  static passwordValidator(control): any {
    // {6,100}      - Assert password is between 6 and 100 characters
    // (?=.*[0-9])  - Assert a string has at least one number
    let valid: boolean = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/.test(control.value);
    return valid ? null : {'invalidPassword': true};
  }
}