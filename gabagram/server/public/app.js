(function() {
  'use strict';

  angular
    .module('myApp', [
      'myApp.subsection',
      'myApp.map',
      'ui.router'
    ])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/subsection");

    $stateProvider
      .state('subsection', {
        url: '/subsection',
        templateUrl: 'subsection/partials/subsection.html',
        controller: 'SubsectionController as ctrl'
      });

      $stateProvider
      .state('abc', {
        url: '/abc',
        templateUrl: 'subsection/partials/abc.html',
        controller: 'SubsectionController as ctrl'
      });

      $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: 'map/partials/map.html',
        controller: 'MapController as ctrl'
      });

  }
})();
