import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './demo-app/demo-app';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
])
.then(success => console.log('Bootstrap success'))
.catch(error => console.error(error))
;