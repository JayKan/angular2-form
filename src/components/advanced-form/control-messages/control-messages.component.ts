import { Component, Host, Input, OnInit } from 'angular2/core';
import { NgFormModel } from 'angular2/common';
import { CustomValidators } from '../../../core/validators';

@Component({
  selector: 'control-messages',
  template: `
    <div *ngIf="errorMessages !== null" class="alert alert-danger">
      {{ errorMessages }}
    </div>
  `
})
export class ControlMessages implements OnInit {
  
  @Input('control')
  controlName: string;
  
  constructor(@Host() private _formDir: NgFormModel) {}
  
  ngOnInit(): void {
    console.log(this.errorMessages);
  }
  
  get errorMessages(): any {
    let control = this._formDir.form.find(this.controlName);
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