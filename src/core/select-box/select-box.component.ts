import { Component, ViewEncapsulation, Input, Output, OnInit, EventEmitter } from 'angular2/core';
import { Instruction } from 'angular2/router';

@Component({
  selector: 'select-box',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div>
    <div class="form-group" style="padding: 0 30px; margin-bottom:5px;">
      <label for="demo">Select example to load:</label>
      <select class="form-control" id="demo" (input)="change($event)">
        <option *ngFor="#demo of demos" [value]="demo.name">
          {{ demo.name }}
        </option>
      </select>
    </div>     
  </div>  
  `
})
export class SelectBox implements OnInit {
  
  @Input('value')
  demos: Array<string>;
  
  @Output('onChange')
  valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    // set default to basic-form example
    this.valueChange.emit({
      value: 'Basic Form'
    })
  }
  
  change(event): void {
    let destination:Instruction = event.target.value.split(' ').join('');
    this.valueChange.emit({
      value: destination
    });
  }
  
}