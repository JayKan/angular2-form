;(function() {
  'use strict';

  // map tells the System loader where to look for things
  var map = {
    'rxjs':       'node_modules/rxjs',
    '@angular':   'node_modules/@angular',
    "@angular/core": "node_modules/@angular/core/core.umd.js",
    "@angular/common": "node_modules/@angular/common/common.umd.js",
    "@angular/compiler": "node_modules/@angular/compiler/compiler.umd.js",
    "@angular/platform-browser": "node_modules/@angular/platform-browser/platform-browser.umd.js",
    "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js",
    "@angular/router-deprecated": "node_modules/@angular/router-deprecated/router-deprecated.umd.js",
    "@angular/router": "node_modules/@angular/router/@angular/router.umd.js"
  };
  
  var config = {
    defaultJSExtensions: true,
    map: map,
    packages: {
      'rxjs': {
        defaultExtension: 'js'
      }
    }
  };

  System.config(config)
})();