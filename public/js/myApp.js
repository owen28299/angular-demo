'use strict';

(function(){
  //creation uses a 2nd array argument to import dependencies.
  angular.module('myApp', []);

  //this is retrieval - it will create myApp
  var myApp = angular.module('myApp');

  myApp
    .config(['MoviesProvider', function(MoviesProvider){
      //configuration
      MoviesProvider.setEndpoint('/api/movies');
    }])
    .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
      //initialize

      //rootScope is the global scope.
      //The appVersion variable can be accessed from anywhere
      $rootScope.appVersion = APP_VERSION;
    }]);
})();

