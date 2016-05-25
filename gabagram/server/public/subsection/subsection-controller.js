(function() {
  'use strict';

  angular
    .module('myApp.subsection', [])
    .controller('SubsectionController', SubsectionController);

  SubsectionController.$inject = ['$scope', '$http'];

  function SubsectionController($scope, $http) {
    var self = this;

    self.message = "yayyyy"

  }


})();
