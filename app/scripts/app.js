define(['exports', 'angularAMD', 'angular-route'], function (exports, _angularAMD, _angularRoute) {
  /**
   * @ngdoc overview
   * @name angularAmdes6App
   * @description
   * # angularAmdes6App
   *
   * Main module of the application.
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var angularApp = angular.module('angularAMDES6', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', _angularAMD.route({
      templateUrl: 'views/todoCreate.html',
      controllerUrl: 'controllers/todoCreate',
      controller: 'TodoCreateCtrl',
      controllerAs: 'vm'
    })).when('/list', _angularAMD.route({
      templateUrl: 'views/todoList.html',
      controllerUrl: 'controllers/todoList',
      controller: 'TodoListCtrl',
      controllerAs: 'vm'
    })).otherwise({
      redirectTo: '/'
    });
  });

  var app = _angularAMD.bootstrap(angularApp, document.body);
  exports.app = app;
});
//# sourceMappingURL=app.js.map
