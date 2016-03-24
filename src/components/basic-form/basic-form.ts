import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'basic-form',
  template: `
    <div>
      <h5>{{ title }}</h5>
    </div>    
  `
})

export class BasicFormDemo implements OnInit {

  title: string = 'Basic Form view from BasicFormDEMO';

  constructor() {}

  ngOnInit(): void {}

  
}