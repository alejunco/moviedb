(function () {
  'use strict';

  angular
    .module('moviedb')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log', '$state', '$interval'];

  function HomeController($log, $state, $interval) {
    var vm = this;

    vm.message = 'Hello from Home Controller';

    vm.currentState = $state.current;

    activate();

    ////////////////

    function activate() {
      $log.info('activated method called in Home Controller');
    }
  }
})();
