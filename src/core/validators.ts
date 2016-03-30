export class CustomValidators {

  static getValidatorErrorMessage(code: string, description: string = 'Current field'): string {
    let config = {
      'required': `${description} is required`,
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
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

  static passwordValidator(control): any {
    // {6,100}      - Assert password is between 6 and 100 characters
    // (?=.*[0-9])  - Assert a string has at least one number
    let valid: boolean = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/.test(control.value);
    return valid ? null : {'invalidPassword': true};
  }
}