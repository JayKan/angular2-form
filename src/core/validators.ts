export class CustomValidators {

  static zipCodeValidator(control): any {
    let valid: boolean = /^\d{5}$/.test(control.value); // 5 digits numbers ONLY
    if (valid) {
      return null;
    }
    return {'invalidZip': true};
  }

  static creditCardValidator(control): any {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    let valid: boolean = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(control.value);
    if (valid) {
      return null;
    }
    return {'invalidCreditCard': true};
  }

  static emailValidator(control): any {
    // RFC 2822 compliant regex
    let valid: boolean = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(control.value);
    if (valid) {
      return null;
    }
    return {'invalidEmailAddress': true};
  }
}