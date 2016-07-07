import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './demo-app/demo-app';

// enable prod for faster renders
enableProdMode();

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
])
.then(success => console.log('Bootstrap success'))
.catch(error => console.error(error));