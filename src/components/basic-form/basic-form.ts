import { Component, OnInit } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { BasicFormModel } from './basic-form.model';
import { uniqueId } from '../../core/unique-id';

@Component({
  selector: 'basic-form',
  templateUrl: 'components/basic-form/basic-form.component.html'
})

export class BasicFormDemo implements OnInit {

  submitted: boolean = false;
  active: boolean = true;
  powers: Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  payload: string;

  // basic-form model
  model = new BasicFormModel(uniqueId(), 'Jay Kan', this.powers[0], 'Default sample description...');

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    this.payload = JSON.stringify(this.model, null, 2);
  }

  newHero(): void {
    this.model = new BasicFormModel(uniqueId(), '', '', '');
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