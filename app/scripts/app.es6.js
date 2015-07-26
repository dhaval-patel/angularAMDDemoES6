
/**
 * @ngdoc overview
 * @name angularAmdes6App
 * @description
 * # angularAmdes6App
 *
 * Main module of the application.
 */

import * as angularAMD from 'angularAMD';
import {} from 'angular-route'

var angularApp = angular.module('angularAMDES6', [
  'ngRoute'
  ])
  .config($routeProvider => {
    $routeProvider
      .when('/', angularAMD.route({
        templateUrl: 'views/todoCreate.html',
        controllerUrl: 'controllers/todoCreate',
        controller: 'TodoCreateCtrl',
        controllerAs: 'vm'
      }))
      .when('/list', angularAMD.route({
        templateUrl: 'views/todoList.html',
        controllerUrl: 'controllers/todoList',
        controller: 'TodoListCtrl',
        controllerAs: 'vm'
      }))
      .otherwise({
        redirectTo: '/'
      });
  });

export var app = angularAMD.bootstrap(angularApp, document.body);