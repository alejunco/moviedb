(function () {
  'use strict'

  describe('Results Controller', function () {
    var results = {
      Search: [{
        Title: 'The Godfather'
      }, {
        Title: 'The Godfather: Part II'
      }]
    };

    var vm;
    var $controller;
    var $q;
    var $rootScope;
    var $stateParams;
    var omdbApi;

    beforeEach(module('moviedb'));
    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _$stateParams_, _omdbApi_) {
      $controller = _$controller_;
      $q = _$q_;
      $rootScope = _$rootScope_;
      $stateParams = _$stateParams_;
      omdbApi = _omdbApi_;
      $stateParams.q = 'the godfather';
    }));

    it('should load search results', function () {
      spyOn(omdbApi, 'search').and.callFake(function () {
        var deferred = $q.defer();
        deferred.resolve(results);
        return deferred.promise;
      });

      vm = $controller('ResultsController');
      $rootScope.$apply();

      expect(vm.results.Search[0].Title).toBe(results.Search[0].Title);
      expect(vm.results.Search[1].Title).toBe(results.Search[1].Title);

      expect(omdbApi.search).toHaveBeenCalledWith('the godfather');
    });

    it('should set error message on error', function () {
      spyOn(omdbApi, 'search').and.callFake(function () {
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
      });

      vm = $controller('ResultsController');
      $rootScope.$apply();

      expect(vm.errorMessage).toEqual('Something went wrong!');
    })

  });
})();
