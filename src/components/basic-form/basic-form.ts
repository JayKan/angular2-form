import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
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


  constructor() {}

  ngOnInit(): void {}

  onSubmit(formValue: string): void {
    this.submitted = true;
    this.payload = JSON.stringify(formValue, null, 2);
  }

  newHero(): void {
    this.active = true;
    this.submitted = false;
  }

  showFormControls(form: NgForm): any {
    return form && form.controls['name'] &&
           form.controls['name'].value;
  }

  diagnostic(formValue: string): string {
    return JSON.stringify(formValue);
  }
}