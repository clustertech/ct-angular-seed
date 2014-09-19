// Copyright 2014 Clustertech Limited. All rights reserved.
//
// Author: NAME (EMAIL)

describe('Sampe Test', function(){
  beforeEach(module('app.controllers'));

  describe('Controller', function() {
    it('Test controller', inject(function($controller) {
      var scope = {},
      ctrl = $controller('sampleController', {$scope:scope});
      expect(scope.target).toBe("world");
    }));
  });

  describe('Directive', function() {
    beforeEach(module('app.directives'));
    beforeEach(module('partials/sample.html'));
    var elm, scope;
    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element('<sample-directive><sample-directive>');
      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
    }));
    it('Sample', function() {
      expect(elm.html()).toBe('html');
    });
  });
});
