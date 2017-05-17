'use strict'

/**
 * @ngdoc overview
 * @name ffExpensesApp
 * @description
 * # ffExpensesApp
 *
 * Main module of the application.
 */
angular
  .module('ffExpensesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/freeze', {
        templateUrl: 'views/freezeFixedIncome.html',
        controller: 'FixedIncomeController',
        controllerAs: 'fixedIncome'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
