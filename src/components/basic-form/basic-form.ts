import { Component, OnInit } from 'angular2/core';
import { FORM_DIRECTIVES, NgForm } from 'angular2/common';
import { BasicFormModel } from './basic-form.model';

@Component({
  selector: 'basic-form',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="container">
      <h5>Basic Form</h5>
      <hr class="border">
      <div [hidden]="submitted">
        <form *ngIf="active" (ngSubmit)="onSubmit()" #basicForm="ngForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text"
                   class="form-control"
                   [(ngModel)]="model.name"
                   ngControl="name"
                   #name="ngForm"
                   required>
            <div [hidden]="name.valid || name.pristine" class="alert alert-danger">Name is required</div>
          </div>  
          
          <div class="form-group">
            <label for="Description">Description</label>
            <input type="text"
                   class="form-control"
                   [(ngModel)]="model.description"
                   ngControl="description"
                   required
                   >
          </div>
          
          <div class="form-group">
            <label for="power">Hero Power</label>
            <select class="form-control" 
                    id="power"
                    [(ngModel)]="model.power"
                    ngControl="power"
                    #power="ngForm"
                    required
                    >
              <option *ngFor="#p of powers" [value]="p">{{ p }}</option>
            </select>
            <div [hidden]="power.valid || power.pristine" class="alert alert-danger">
              Power is required
            </div>
          </div>
          
          <button type="submit" class="btn btn-default" [disabled]="!basicForm.form.valid">Submit</button>
          <button type="button" class="btn btn-default" (click)="newHero()">New Hero</button>
          
          <div>
            <hr>
            Name via form.controls = {{ showFormControls(basicForm) }}
          </div>
        </form>
      </div>
    </div>    
  `
})

export class BasicFormDemo implements OnInit {

  submitted: boolean = false;
  active: boolean = true;
  powers: Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // basic-form model
  model = new BasicFormModel(18, 'Dr IQ', this.powers[0], 'Dr IQ sample description');

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }

  newHero(): void {
    this.model = new BasicFormModel(20, '', '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  // Reveal in html:
  // Name via form.controls {{ showFormControls(basicForm) }}
  showFormControls(form: NgForm): any {
    var formControls = form && form.controls['name'] &&
                       form.controls['name'].value;
    console.log('------- Form Control Value ------: ', formControls);
    return formControls;
  }
}