import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { CustomValidators } from '../../core/validators';

// An Angular form is a collection of `Control`s in some hierarchy.
// * `Control`s can be at the top level or can be organized in `ControlGroup`s
// * or `ControlArray`s. This hierarchy is reflected in the form's `value`, a
// * JSON object that mirrors the form structure.
@Component({
  selector: 'intermediate-form',
  templateUrl: 'components/intermediate-form/intermediate-form.component.html'
})
export class IntermediateFormDemo implements OnInit {

  /**
   * @property myForm
   * @type {ControlGroup}
   * Current component formControls in terms of adding
   * validators and data binding for your custom form.
   */
  myForm: ControlGroup;
  submitted: boolean = false;
  formData: string;
  
  constructor(private _builder: FormBuilder) {}
  
  ngOnInit(): void {
    this.myForm = this._builder.group({
      'firstName': ['Test', Validators.compose([Validators.required])],
      'lastName': ['User', Validators.required],
      'email': ['test.user@gmail.com', Validators.compose([CustomValidators.emailValidator, Validators.required])],
      'creditCard': ['4111222233334444', Validators.compose([CustomValidators.creditCardValidator, Validators.required])],
      'zipCode': ['95133', Validators.compose([CustomValidators.zipCodeValidator, Validators.required])],
      'addressType': ['home', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.myForm);
    this.formData  = JSON.stringify(this.myForm.value, null, 2);
  }

  clear(): void {
    for (let c in this.myForm.controls) {
      this.myForm.controls[c].updateValue('');
    }
  }

  get debug(): string {
    return JSON.stringify(this.myForm.value, null, 2);
  }
}