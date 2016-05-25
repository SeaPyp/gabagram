(function() {
  'use strict';

  angular
    .module('myApp.map', [])
    .controller('MapController', MapController);

  MapController.$inject = ['$scope', '$http'];

  function MapController($scope, $http) {
    var self = this;

    self.message = "MAAAAAP"

  }


})();
