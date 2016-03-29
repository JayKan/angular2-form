
export class CustomValidators {
  static zipCodeValidator(control): any {
    let valid: boolean = /^\d{5}$/.test(control.value);
    if (valid) {
      return null;
    }
    return {'invalidZip': true}
  }
}