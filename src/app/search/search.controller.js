(function () {
  'use strict';

  angular
    .module('moviedb')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$state', '$timeout'];

  function SearchController($state, $timeout) {
    var vm = this;
    var keyupTimeout;
    vm.search = search;

    vm.keyup = function () {
      keyupTimeout = $timeout(function () {
        vm.search();
      }, 1000);
    }

    vm.keydown = function () {
      $timeout.cancel(keyupTimeout);
    }

    activate();

    ////////////////

    function activate() {}

    function search() {
      if (vm.query) {
        $state.go('results', {
          q: vm.query
        });
      }
    }
  }
})();
