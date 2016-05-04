'use strict';

//creation uses a 2nd array argument to import dependencies.
angular.module('myApp', []);

//this is retrieval - it will create myApp
var myApp = angular.module('myApp');

myApp
  .config(function(){
    //configuration
  })
  .run(function(){
    //initialize
  });

//$scope in array format is necessary if minifying this file
myApp.controller('myController', ['$scope', function($scope){
  //attach model to scope
  $scope.myFirstName = 'Owen';

  $scope.myModel = 'Mochi';
}]);