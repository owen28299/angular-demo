'use strict';

(function(){
  var myApp = angular.module('myApp');

  //$scope in array format is necessary if minifying this file
  myApp.controller('myController', ['$scope', 'MainCharacter', function($scope, MainCharacter){
    //attach model to scope
    $scope.myFirstName = 'Owen';

    $scope.myModel = 'Mochi';

    $scope.mainCharacter = MainCharacter;
  }]);
})();
