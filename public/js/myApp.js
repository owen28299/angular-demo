'use strict';

(function(){
  //creation uses a 2nd array argument to import dependencies.
  angular.module('myApp', ['ngRoute', 'ngAnimate']);

  //this is retrieval - it will create myApp
  var myApp = angular.module('myApp');

  myApp
    .config(['MoviesProvider',
      '$routeProvider',
      '$locationProvider',
    function(MoviesProvider, $routeProvider, $locationProvider ){
      //configuration
      MoviesProvider.setEndpoint('/api/movies');

      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl : 'views/default.html'
        })
        .when('/books', {
          templateUrl : 'views/books.html',
          controller  : 'BooksController'
        })
        .when('/movies', {
          templateUrl : 'views/movies.html',
          controller  : 'MoviesController'
        })
        .when('/other', {
          templateUrl : 'views/other.html',
          controller  : 'OtherController'
        })
        .otherwise({
          templateUrl : 'views/404.html'
        });
    }])
    .run(['$rootScope',
      'APP_VERSION',
    function($rootScope, APP_VERSION){
      //initialize

      //rootScope is the global scope.
      //The appVersion variable can be accessed from anywhere
      $rootScope.appVersion = APP_VERSION;
    }]);
})();

