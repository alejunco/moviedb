(function () {
  'use strict';

  angular
    .module('moviedb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('results', {
        url: '/search?q',
        templateUrl: 'app/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
