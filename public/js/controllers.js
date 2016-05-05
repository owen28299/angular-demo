'use strict';

(function(){
  var myApp = angular.module('myApp');

  //$scope in array format is necessary if minifying this file
  myApp.controller('myController',
    ['$scope',
    'MainCharacter',
    'CharacterVersionFactory',
    'BookService',
    'Movies',
    function($scope, MainCharacter, CharacterVersionFactory, BookService, Movies){
    //attach model to scope
    $scope.myFirstName = 'Owen';

    $scope.myModel = 'Mochi';

    $scope.mainCharacter = MainCharacter;

    $scope.characterVersion = CharacterVersionFactory;

    $scope.BookService = BookService;

    console.log(Movies.getMovies());

  }]);
})();
