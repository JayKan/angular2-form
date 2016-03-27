import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './components/demo-app/demo-app';

bootstrap(AppComponent, [])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.error(error))
;