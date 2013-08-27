'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/train', {
	templateUrl: '/partials/train-index',
    }).
    when('/train/:category', {
      templateUrl: '/partials/train',
      controller: 'TrainCtrl'
    }).
    when('/test', {
      templateUrl: '/partials/test',
      controller: 'TestCtrl'
    }).
    when('/list-management', {
      templateUrl: '/partials/list-management',
      controller: 'ListManagementCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
