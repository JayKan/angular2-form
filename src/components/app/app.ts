import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

@Component({
  selector: 'demo-app',
  // providers: [ROUTER_PROVIDERS],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>          
    </div>
  `
})
// @RouteConfig([
//   {path: '/basic-form', name: 'BasicForm', }
// ])
export class AppComponent {
  public title: string = 'Hello World from AppComponent';
}