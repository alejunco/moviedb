(function () {
  'use strict'
  describe('Search Controller', function () {
    var vm;
    var $state;
    var $timeout;

    beforeEach(module('moviedb'));

    beforeEach(inject(function ($controller, $log, _$state_, _$timeout_) {
      $log.info('running before each');
      $state = _$state_;
      $timeout = _$timeout_
      vm = $controller('SearchController');

      spyOn($state, 'go').and.callFake(function () {

      });

    }));

    it('should redirect to the query results page for non-empty query', function () {
      vm.query = 'the godfather';

      vm.search();

      expect($state.go).toHaveBeenCalled();
      expect($state.go).toHaveBeenCalledWith('results', {
        q: vm.query
      });
    });

    it('should not redirect to query results for empty query', function () {
      vm.query = '';
      vm.search();
      expect($state.go).not.toHaveBeenCalled();
      expect($state.current.url === '/' || $state.current.url === '^').toBeTruthy();
    });

    it('should redirect after 1 second of keyboard inactivity', function () {
      vm.query = 'the godfather';
      vm.keyup();

      $timeout.flush();
      expect($timeout.verifyNoPendingTasks).not.toThrow();
      expect($state.go).toHaveBeenCalled();
      expect($state.go).toHaveBeenCalledWith('results', {
        q: vm.query
      });
    });

    it('should cancel timeout in keydown', function () {
      vm.query = 'the godfather';
      vm.keyup();
      vm.keydown();
      expect($timeout.verifyNoPendingTasks).not.toThrow();
    });

    

  });
})();
