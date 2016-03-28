import { Component, ViewEncapsulation} from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { BasicFormDemo } from '../components/basic-form/basic-form';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

@RouteConfig([
  { path: '/basic-form', name: 'BasicForm', component: BasicFormDemo, useAsDefault: true },
])

export class AppComponent {
  menuItems: Array<any>;
  constructor() {
    this.menuItems = [
      { caption: 'Basic Form', link: ['BasicForm'] }
    ]
  }
}