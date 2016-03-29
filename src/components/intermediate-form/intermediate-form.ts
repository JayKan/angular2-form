import { Component, OnInit } from 'angular2/core';
import { 
  ControlGroup, 
  FormBuilder, 
  Validators
} from 'angular2/common';

// TODO: add docs for intermediate form
// You will need FormBuild, Validators from Angular2
// create form programmatically.
// FormBuild.group({[key: string]: any})
// Validators.compose() => add custom validators.
// form: ControlGroup
// You will need Validators
// [ngFormModel]: binds an existing control group to a DOM element.

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
      'firstName': ['Jay', Validators.required], // 1st element: value for form
      'lastName': ['Kan', Validators.required],
      'zipCode': ['', Validators.compose([zipValidators, Validators.required])],
      'addressType': ['home', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.formData  = JSON.stringify(this.myForm.value, null, 2);
  }
}

function zipValidators(zip) {
  let valid: boolean = /^\d{5}$/.test(zip.value);
  if (valid) {
    return null;
  }
  return {'invalidZip': true}
}