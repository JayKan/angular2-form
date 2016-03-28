import { Component, OnInit } from 'angular2/core';
import { FORM_DIRECTIVES, NgForm } from 'angular2/common';
import { BasicFormModel } from './basic-form.model';

@Component({
  selector: 'basic-form',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'components/basic-form/basic-form.component.html'
})

export class BasicFormDemo implements OnInit {

  submitted: boolean = false;
  active: boolean = true;
  powers: Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  payload: string;

  // basic-form model
  model = new BasicFormModel(18, 'Jay Kan', this.powers[0], '');

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    this.payload = JSON.stringify(this.model, null, 2);
  }

  newHero(): void {
    this.model = new BasicFormModel(20, '', '', '');
    this.active = false;
    setTimeout(() => {
      this.active = true;
      this.submitted = false;
    }, 0);
  }

  showFormControls(form: NgForm): any {
    return form && form.controls['name'] &&
           form.controls['name'].value;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}