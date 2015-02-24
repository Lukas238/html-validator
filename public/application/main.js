'use_strict';

var mrmApp = angular.module('mrmValidate', ['ngRoute', 'ngSanitize', 'ngMock', 'angularFileUpload', 'validatorController']);


mrmApp.config(['$routeProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/validate', {
		templateUrl: 'views/htmlValidator.html',
		controller: 'htmlValidatorControler'
	}).
	otherwise({
		redirectTo: '/validate'
	});
}]);
