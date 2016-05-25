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
      .state('gabs', {
        url: '/gabs',
        templateUrl: 'subsection/partials/gabs.html',
        controller: 'SubsectionController as ctrl'
      });

      $stateProvider
      .state('user', {
        url: '/users',
        templateUrl: 'subsection/partials/users.html',
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
