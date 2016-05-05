'use strict';

(function(){
  angular.module('myApp')
    .provider('Movies', [function(){
      var endpoint = '';

      this.setEndpoint = function(url){
        endpoint = url;
      };

      //injectable service step
      this.$get = function(){//this is the factory inside the provider

        return {
          getMovies : function(){
            return "WOOT" + endpoint;
          }
        };

      };

    }]);
})();