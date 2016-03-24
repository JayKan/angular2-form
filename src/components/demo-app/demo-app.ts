import { Component, ViewEncapsulation} from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { BasicFormDemo } from '../basic-form/basic-form';

@Component({
  selector: 'demo-app',
  templateUrl: 'components/demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
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