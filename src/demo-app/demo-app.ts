import { Component, ViewEncapsulation } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
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

export class AppComponent {
  
}