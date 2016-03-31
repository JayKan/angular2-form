export class QuestionBase<T> {
  value: T;
  key: string;
  text: string;
  order: number;
  controlType: string;
  prefill: any;
  
  required: boolean;
  emailValidator: boolean;
  zipCodeValidator: boolean;
  creditCardValidator: boolean;
  passwordValidator: boolean;
  validators: {[key: string]: boolean};
}