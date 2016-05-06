import { Component, Input, OnInit } from '@angular/core';
import { QuestionModel } from '../model/model';
import { ControlGroup, FormBuilder } from '@angular/common';
import { ControlMessages } from '../../../core/control-messages/control-messages';

@Component({
  selector: 'survey',
  directives: [ControlMessages],
  templateUrl: 'components/advanced-form/survey/survey.component.html'
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