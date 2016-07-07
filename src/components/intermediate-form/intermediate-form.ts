import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../core/validators';
import { ControlMessages } from '../../core/control-messages/control-messages';

// An Angular form is a collection of `Control`s in some hierarchy.
// * `Control`s can be at the top level or can be organized in `ControlGroup`s
// * or `ControlArray`s. This hierarchy is reflected in the form's `value`, a
// * JSON object that mirrors the form structure.
@Component({
  selector: 'intermediate-form',
  templateUrl: 'components/intermediate-form/intermediate-form.component.html',
  directives: [ControlMessages, REACTIVE_FORM_DIRECTIVES]
})
export class IntermediateFormDemo implements OnInit {

  /**
   * @property myForm
   * @type {FormGroup}
   * Current component formControls in terms of adding
   * validators and data binding for your custom form.
   */
  myForm: FormGroup;
  submitted: boolean = false;
  formData: string;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      'firstName': ['Test', Validators.compose([Validators.required, CustomValidators.stringValidator])],
      'lastName': ['User', Validators.compose([Validators.required, CustomValidators.stringValidator])],
      'email': ['test.user@gmail.com', Validators.compose([CustomValidators.emailValidator, Validators.required])],
      'creditCard': ['4111222233334444', Validators.compose([CustomValidators.creditCardValidator, Validators.required])],
      'zipCode': ['95133', Validators.compose([CustomValidators.zipCodeValidator, Validators.required])],
      'addressType': ['home', Validators.required]
    });
  }

  onSubmit(formValue: string): void {
    this.submitted = true;
    this.formData  = JSON.stringify(formValue, null, 2);
  }

  clear(): void {
    for (let c in this.myForm.controls) {
      // this.myForm.controls[c].updateValue('');
    }
  }
}