'use strict';

(function(){
  var myApp = angular.module('myApp');

  //$scope in array format is necessary if minifying this file
  myApp.controller('myController',
    ['$scope', 'MainCharacter', 'CharacterVersionFactory', 'BookService',
    function($scope, MainCharacter, CharacterVersionFactory, BookService){
    //attach model to scope
    $scope.myFirstName = 'Owen';

    $scope.myModel = 'Mochi';

    $scope.mainCharacter = MainCharacter;

    $scope.characterVersion = CharacterVersionFactory;

    $scope.books = BookService.getBooks();
  }]);
})();
