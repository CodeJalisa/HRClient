'use strict';

/**
 * @ngdoc overview
 * @name hrclientApp
 * @description
 * # hrclientApp
 *
 * Main module of the application.
 */
angular
  .module('hrclientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addTimeCardPage', {
        templateUrl: 'views/timecard.html',
        controller: 'TimecardCtrl',
        controllerAs: 'timecard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
