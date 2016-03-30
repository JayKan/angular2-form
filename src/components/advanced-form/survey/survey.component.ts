import { Component, Input, OnInit } from 'angular2/core';
import { QuestionModel } from '../model/model';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { ControlMessages } from '../control-messages/control-messages';

@Component({
  selector: 'survey',
  directives: [ControlMessages],
  template: `
  <div>
    <p>Survey using Dynamic Form:</p>
    <form [ngFormModel]="form" (ngSubmit)="onSubmit()" #f="ngForm">     
      <div *ngFor="#question of model.questions" class="form-group">      
        <label [attr.for]="question.key">{{ question.text }}</label>
        <div [ngSwitch]="question.controlType">
          <div *ngSwitchWhen="'textbox'">
            <input class="form-control"
                   [type]="question.type" 
                   [id]="question.key"
                   ngControl="{{ question.key }}">
          </div>          
          <div *ngSwitchWhen="'dropdown'">
            <select class="form-control" id="{{ question.key }}" ngControl="{{ question.key }}">
              <option *ngFor="#o of question.options" [value]="o.key">{{ o.value }}</option>
            </select>
          </div>
        </div>
        
        <control-messages [control]="question.key"></control-messages>
      </div>
    </form>
  </div>
  `,
  inputs: ['model']
})

export class Survey implements OnInit {

  /**
   * Input decorator declares a `data-bound` input property.
   * Angular automatically updates `data-bound` properties during change detection.
   * 
   * `model` passes in from outside the current `survey` component.
   */
  @Input()  
  model: QuestionModel;
  
  form: ControlGroup;
  formData: string;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this._formBuilder.group(this.model.toGroup());
  }

  onSubmit(): void {
    
  }
}