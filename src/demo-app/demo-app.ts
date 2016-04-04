import { Component, ViewEncapsulation, OnInit, EventEmitter } from 'angular2/core';
import { Router, Instruction, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { BasicFormDemo } from '../components/basic-form/basic-form';
import { IntermediateFormDemo } from '../components/intermediate-form/intermediate-form';
import { AdvancedFormDemo } from '../components/advanced-form/advanced-form';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

@RouteConfig([
  { path: '/basic-form', name: 'BasicForm', component: BasicFormDemo, useAsDefault: true  },
  { path: '/intermediate-form', name: 'IntermediateForm', component: IntermediateFormDemo },
  { path: '/advanced-form', name: 'AdvancedForm', component: AdvancedFormDemo             }
])

export class AppComponent implements OnInit {
  
  demos: Array<any>;
  // selectValue: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private _router: Router) {
    this.demos = [
      {
        path: '/basic-form',
        name: 'Basic Form'
      },
      {
        path: '/intermediate-form',
        name: 'Intermediate Form'
      },
      {
        path: '/advanced-form',
        name: 'Advanced Form'
      }
    ];
  }

  ngOnInit(): void {}

  select(event): void {
    console.log('value changed: ', event.target.value);
    let destination:Instruction = event.target.value.split(' ').join('');
    console.log('Destination: ', destination);
    this._router.navigate([destination]);
  }
}