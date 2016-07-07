import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { CustomValidators } from '../validators';

@Component({
  selector: 'control-messages',
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'core/control-messages/control-messages.component.html'
})
export class ControlMessages implements OnInit {
  
  @Input('control')
  controlName: string;

  @Input('parent-form')
  parentForm: FormGroup;
  
  constructor() {}
  
  ngOnInit(): void {}
  
  get errorMessages(): any {
    let control = this.parentForm.find(this.controlName);
    for (let propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return CustomValidators.getValidatorErrorMessage(propertyName, _normalize(this.controlName));
      }
    }
    return null;
  }
}

function _normalize(value: string) {
  let description = value.replace(/([A-Z])/g, "_$1")
      .replace(/_/,'')
      .toLowerCase();
  return capitalize(description);
}

function capitalize(str) {
  return str.replace(/\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}