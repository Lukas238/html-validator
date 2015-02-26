'use_strict';

var mrmApp = angular.module('mrmValidate', ['ngRoute', 'ngSanitize','angularFileUpload', 'validatorController']);


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
