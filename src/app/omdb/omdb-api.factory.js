(function () {
  'use strict';

  angular
    .module('moviedb')
    .factory('omdbApi', omdbApi);

  omdbApi.$inject = ['$http'];

  function omdbApi($http) {
    var baseUrl = 'http://www.omdbapi.com/?apikey=e52776d1&';
    var service = {
      search: search,
      findById: findById
    };

    return service;

    ////////////////
    function search(query) {
      return $http.get(baseUrl + 's=' + encodeURIComponent(query))
        .then(function (response) {
          return response.data;
        });
    }

    function findById() {
      return [];
    }
  }
})();
