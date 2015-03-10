'use_strict';

var angular = require('angular');
var ngRoute = require('angular-route');
var ngSanitize = require('angular-sanitize');

var mrmApp = angular.module('mrmValidate', ['ngRoute', 'ngSanitize', 'angularFileUpload', 'validatorController']);


mrmApp.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/validate', {
        templateUrl: 'views/htmlValidator.html',
        controller: 'HtmlValidatorControler'
    }).
    otherwise({
        redirectTo: '/validate'
    });
}]);
