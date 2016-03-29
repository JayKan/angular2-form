import { Component, OnInit } from 'angular2/core';
import { 
  ControlGroup, 
  FormBuilder, 
  Validators,
  NgForm,
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
  template:`
  <div class="container">
    <h5>Intermediate Form Example</h5>
    <hr>
    <form (ngSubmit)="onSubmit()" [ngFormModel]="myForm" #f="ngForm">    
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" 
               id="firstName"  
               class="form-control" 
               ngControl="firstName"
               #firstName="ngForm">
        <div *ngIf="!firstName.valid && firstName.touched" class="alert alert-danger">First name is required</div>
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input type="text"
               id="lastName"
               class="form-control"
               ngControl="lastName"
               #lastName="ngForm">
        <div *ngIf="!lastName.valid && lastName.touched" class="alert alert-danger">Last name is required</div>
      </div>
      <div class="form-group">
        <label for="zip">Zip Code</label>
        <input type="text"
               id="zip"
               class="form-control"
               ngControl="zipCode"
               #zip="ngForm">
        <div *ngIf="!zip.valid && zip.touched" class="alert alert-danger">
          <div *ngIf="zip.errors !== null && zip.errors.required">Zip code is required</div>
          <div *ngIf="zip.errors !== null && zip.errors.invalidZip">Zip code must be 5 numeric digits</div>
        </div>
      </div>
      <div class="form-group">
        <label for="addressType">Address Type</label>
        <select class="form-control"
                id="addressType"
                ngControl="addressType"
                #type="ngForm">
          <option [value]="">Select Address Type</option>
          <option [value]="'home'">Home Address</option>
          <option [value]="'billing'">Billing Address</option>
        </select>
      </div>
      
      <button type="submit" 
              class="btn btn-default" 
              [disabled]="!f.form.valid">Submit</button>
    </form>
    <hr>
    <div [hidden]="!submitted">
      <div *ngIf="formData">
        <strong>You have submitted the following: </strong>
        <pre>{{ formData }}</pre>
      </div>     
    </div>   
  </div>
  `
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