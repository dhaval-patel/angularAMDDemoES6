define(['exports', 'angularAMD', 'angular-route'], function (exports, _angularAMD, _angularRoute) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var angularApp = angular.module('angularAMDES6', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', _angularAMD.route({
      templateUrl: 'views/main.html',
      controllerUrl: 'controllers/main',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })).when('/about', _angularAMD.route({
      templateUrl: 'views/about.html',
      controllerUrl: 'controllers/about',
      controller: 'AboutCtrl'
    })).otherwise({
      redirectTo: '/'
    });
  });

  var app = _angularAMD.bootstrap(angularApp, document.body);
  // define(['angularAMD', 'angular', 'angular-route'], function (angularAMD) {
  //   var app = angular
  //     .module('angularAmddemoApp', [
  //       'ngRoute'
  //     ])
  //     .config(function ($routeProvider) {
  //       $routeProvider
  //         .when('/', angularAMD.route({
  //           templateUrl: 'views/main.html',
  //           controllerUrl: 'controllers/main',
  //           controller: 'MainCtrl'
  //         }))
  //         .when('/about', angularAMD.route({
  //           templateUrl: 'views/about.html',
  //           controllerUrl: 'controllers/about',
  //           controller: 'AboutCtrl'
  //         }))
  //         .otherwise({
  //           redirectTo: '/'
  //         });
  //     });

  //     return angularAMD.bootstrap(app, document.body);
  //  });
  exports.app = app;
});
/**
 * @ngdoc overview
 * @name angularAmdes6App
 * @description
 * # angularAmdes6App
 *
 * Main module of the application.
 */
//# sourceMappingURL=app.js.map
