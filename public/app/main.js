'use_strict';

/**
 *
 * @namespace mrmValidate
 */
var mrmApp = angular.module('mrmValidate', ['ngRoute', 'ngSanitize', 'angularFileUpload', 'validatorController', 'angular-loading-bar', 'ngAnimate', 'cfp.loadingBar', 'chieffancypants.loadingBar']);




mrmApp.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/validate', {
        templateUrl: 'views/htmlValidator.html',
        controller: 'HtmlValidatorController'
    }).
    otherwise({
        redirectTo: '/validate'
    });
}]);
