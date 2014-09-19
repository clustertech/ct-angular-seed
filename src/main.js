// Copyright 2014 Clustertech Limited. All rights reserved.
//
// Author: NAME (EMAIL)

(function() {
  'use strict';
  var dec = [
    'ng',
    'ngRoute',

    'pascalprecht.translate',

    'app.controllers',
    'app.filters',
    'app.directives',
    'app.models',
    'app.services'
  ];

  if (angular.mock) {
    dec.push('app.mock');
  }

  angular.module('app.controllers', []);
  angular.module('app.directives', []);
  angular.module('app.filters', []);
  angular.module('app.services', []);
  angular.module('app.models', []);

  var app = angular.module('app', dec);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sample', {
      controller: 'sampleController',
      template: '<div>{{"GREET" | translate}}{{target}}</div>'
    }).otherwise({
      redirectTo: '/sample'
    });
  }]);

  app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'public/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');
  }]);

})();
