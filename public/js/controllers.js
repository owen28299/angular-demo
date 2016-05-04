'use strict';

//$scope in array format is necessary if minifying this file
myApp.controller('myController', ['$scope', function($scope){
  //attach model to scope
  $scope.myFirstName = 'Owen';

  $scope.myModel = 'Mochi';
}]);