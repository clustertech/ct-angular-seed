// Copyright 2014 Clustertech Limited. All rights reserved.
//
// Author: jackeychen (jackeychen@clustertech.com)

// Defines mock module and set up basic mock environment
angular.module('app.mock', ['ngMockE2E']).factory('URI', [function() {
  'use strict';
  // URI service
  return window.URI;
}]).run(['$httpBackend', function($httpBackend) {
  'use strict';
  $httpBackend.whenGET(/^partials\//).passThrough();
  $httpBackend.whenGET(/^public\//).passThrough();
}]).config(['$provide', function($provide) {
  // Set response delay 0.1 to 1.2s
  $provide.decorator('$httpBackend', function($delegate) {
    var proxy = function(method, url, data, callback, headers) {
      var interceptor = function() {
        var _this = this,
        _arguments = arguments;

        var delay = Math.floor((Math.random() * 1100) + 100);
        setTimeout(function() {
          callback.apply(_this, _arguments);
        }, delay);
      };
      return $delegate.call(this, method, url, data, interceptor, headers);
    };

    for(var key in $delegate) {
      proxy[key] = $delegate[key];
    }
    return proxy;
  });
}]);
