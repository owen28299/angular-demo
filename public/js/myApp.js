'use strict';

(function(){
  //creation uses a 2nd array argument to import dependencies.
  angular.module('myApp', []);

  //this is retrieval - it will create myApp
  var myApp = angular.module('myApp');

  myApp
    .config(function(){
      //configuration
    })
    .run(function($rootScope, APP_VERSION){
      //initialize
      $rootScope.appVersion = APP_VERSION;
    });
})();

