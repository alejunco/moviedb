(function() {
  'use strict';

  angular
    .module('moviedb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
