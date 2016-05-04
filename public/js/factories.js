'use strict';

(function(){
  angular.module('myApp')
    .factory('CharacterVersionFactory',
      ['MainCharacter', 'APP_VERSION',
      function(MainCharacter, APP_VERSION) {
        return MainCharacter + " " + APP_VERSION;
      }]);
})();