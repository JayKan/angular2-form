import { Component, Input, OnInit } from '@angular/core';
import { QuestionModel } from '../model/model';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlMessages } from '../../../core/control-messages/control-messages';

@Component({
  selector: 'survey',
  directives: [ControlMessages, REACTIVE_FORM_DIRECTIVES],
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
  form: FormGroup;
  formData: string;
  submitted: boolean = false;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this._formBuilder.group(
      this.model.toGroup()
    );
  }
  
  onSubmit(formValue: string): void {
    this.formData = JSON.stringify(formValue, null, 2);
    this.submitted = true;
  }
}