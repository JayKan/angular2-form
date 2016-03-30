export class QuestionBase<T> {
  value: T;
  key: string;
  text: string;
  required: boolean;
  order: number;
  controlType: string;

  emailValidator: boolean;
  zipCodeValidator: boolean;
  creditCardValidator: boolean;
  passwordValidator: boolean;
}