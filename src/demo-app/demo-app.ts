import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Instruction } from '@angular/router-deprecated';
import { BasicFormDemo } from '../components/basic-form/basic-form';
import { IntermediateFormDemo } from '../components/intermediate-form/intermediate-form';
import { AdvancedFormDemo } from '../components/advanced-form/advanced-form';
import { SelectBox } from '../core/select-box/select-box';
import { FlattyLogin } from '../components/logins/logins';

@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.component.html',
  directives: [ROUTER_DIRECTIVES, SelectBox],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['demo-app/demo-app.component.css']
})

@RouteConfig([
  { path: '/basic-form', name: 'BasicForm', component: BasicFormDemo, useAsDefault: true  },
  { path: '/intermediate-form', name: 'IntermediateForm', component: IntermediateFormDemo },
  { path: '/advanced-form', name: 'AdvancedForm', component: AdvancedFormDemo             },
  { path: '/flatty-login', name: 'FlattyLogin', component: FlattyLogin                    }
])

export class AppComponent implements OnInit {
  
  demos: Array<any>;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.demos = [
      { path: '/basic-form',        name: 'Basic Form'          },
      { path: '/intermediate-form', name: 'Intermediate Form'   },
      { path: '/advanced-form',     name: 'Advanced Form'       },
      { path: '/flatty-login',      name: 'Flatty Login'        }
    ];
  }

  onSelect(event): void {
    let destination:Instruction = event.value.split(' ').join('');
    this._router.navigate([destination]);
  }
}