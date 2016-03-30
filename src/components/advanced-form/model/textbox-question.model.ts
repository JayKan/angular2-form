import { QuestionBase } from './question-base.model';

export class TextBoxQuestion extends QuestionBase<string> {
  
  type: string;
  controlType: string = 'textbox';
  
  constructor() {
    super();
  }
}