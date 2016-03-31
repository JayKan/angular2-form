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
    <form (ngSubmit)="onSubmit()" [ngFormModel]="form" #f="ngForm">     
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
      <button type="submit" class="btn btn-default" [disabled]="!form.valid">Submit</button>
    </form>
    <hr>
    
    <div [hidden]="!submitted">
      <div *ngIf="formData">
        <strong>You have submitted the following: </strong>
        <pre>{{ formData }}</pre>
      </div>
    </div>
  </div>
  `,
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
  submitted: boolean = false;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this._formBuilder.group(this.model.toGroup());
  }

  onSubmit(): void {
    this.formData = JSON.stringify(this.form.value, null, 2);
    this.submitted = true;
  }
}