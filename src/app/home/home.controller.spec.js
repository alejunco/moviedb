(function () {
  'use strict'
  describe('home controller', function () {
    var vm;
    
    //tt0068646
    //tt0133093
    //tt0075314
    //tt0120737

    beforeEach(module('moviedb'));

    beforeEach(inject(function (_$controller_) {
      vm = _$controller_('HomeController');
    }))

    it('should have a greeting message', function () {
      expect(vm.message).toEqual('Hello from Home Controller');
    });

    it('should rotate movies every 5 seconds', function () {
      expect(vm.result.Title).toBe(results[0].Title)
    });

  });

})();
