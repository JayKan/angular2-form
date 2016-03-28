export class BasicFormModel {

  public id: number;
  public name: string;
  public description: string;
  public power: string;
  constructor(id: number, name?: string, power?: string, description?: string) {
    this.id           = id;
    this.name         = name;
    this.power        = power;
    this.description  = description;
  }
}