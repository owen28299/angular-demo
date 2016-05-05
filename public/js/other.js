'use strict';

(function(){
  angular.module('myApp')
    .controller('OtherController', ['$scope',
      'MainCharacter',
      'CharacterVersionFactory',
    function($scope, MainCharacter, CharacterVersionFactory){
      $scope.mainCharacter = MainCharacter;
      $scope.characterVersion = CharacterVersionFactory;
      $scope.myFirstName = 'Owen';
      $scope.myModel = 'Mochi';
    }]);
})();