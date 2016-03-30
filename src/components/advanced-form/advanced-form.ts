import { Component } from 'angular2/core';

import { Survey } from './survey/survey';
import { QuestionModel, TextBoxQuestion, DropDownQuestion } from './model/model';

@Component({
  selector: 'advanced-form',
  directives: [Survey],
  template: `
    <div class="container">
      <h5>Advanced Form Examples</h5>
      <hr class="border">
      <survey></survey>
    </div>
  `
})
export class AdvancedFormDemo {

  questionModel: QuestionModel = new QuestionModel();
  
  constructor() {}
}