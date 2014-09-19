// Copyright 2014 Clustertech Limited. All rights reserved.
//
// Author: NAME (EMAIL)

angular.module('app.directives').directive('sampleDirective', function() {
  'use strict';
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    templateUrl: 'partials/sample.html'
  };
});
