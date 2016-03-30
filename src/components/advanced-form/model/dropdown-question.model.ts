import { QuestionBase } from './question-base.model';

export class DropDownQuestion extends QuestionBase<string> {
  
  options: Array<any> = [];
  controlType: string = 'dropdown';
  
  constructor() {
    super();
  }
}