(function () {
  'use strict';

  angular
    .module('moviedb')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$log', '$stateParams', 'omdbApi'];

  function ResultsController($log, $stateParams, omdbApi) {
    var vm = this;

    var query = $stateParams.q;

    activate();

    ////////////////

    function activate() {
      omdbApi.search(query).then(function (data) {
        vm.results = data;
        $log.info(vm.results);
      }).catch(function () {
        vm.errorMessage = 'Something went wrong!';
      });
    }
  }
})();
