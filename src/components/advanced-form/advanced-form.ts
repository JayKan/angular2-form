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
      <survey [model]="questionModel"></survey>
    </div>
  `
})
export class AdvancedFormDemo {

  questionModel: QuestionModel = new QuestionModel();
  
  constructor() {

    let question  = new TextBoxQuestion();
    question.key  = 'lastName';
    question.text = 'Last name';
    question.required = true;
    question.order = 2;
    question.type = 'text';
    question.prefill = 'Kan';
    this.questionModel.questions.push(question); // push each input field to questions collection
    
    question = new TextBoxQuestion();
    question.key = 'firstName';
    question.text = 'First name';
    question.required = true;
    question.order = 1;
    question.type = 'text';
    question.prefill = 'Jay';
    this.questionModel.questions.push(question);
    
    question = new TextBoxQuestion();
    question.key = 'emailAddress';
    question.text = 'Email address';
    question.required = true;
    question.emailValidator = true;
    question.type = 'text';
    question.order = 3;
    question.prefill = 'test@gmail.com';
    this.questionModel.questions.push(question);
    
    let dropDownQuestion = new DropDownQuestion();
    dropDownQuestion.key = 'country';
    dropDownQuestion.text = 'Country';
    dropDownQuestion.required = true;
    dropDownQuestion.prefill = 'usa';
    dropDownQuestion.options.push({key: '', value: 'Select a country'});
    dropDownQuestion.options.push({key: 'usa', value: 'USA'});
    dropDownQuestion.options.push({key: 'germany', value: 'Germany'});
    dropDownQuestion.options.push({key: 'canada', value: 'Canada'});
    dropDownQuestion.options.push({key: 'australia', value: 'Australia'});
    this.questionModel.questions.push(dropDownQuestion);
    
    // sort question collections by order priority.
    this.questionModel.questions.sort((a, b) => a.order - b.order);
  }
}