'use strict';

(function(){
  angular.module('myApp')
    .controller('MoviesController', ['$scope',
      'Movies',
      function($scope, Movies){
        $scope.movies = [];
        Movies.getMovies().then(function(response){
          $scope.movies = response.data;
        });
      }]);
})();