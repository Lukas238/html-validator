var app = angular.module('mrmValidate', []);

app.controller('mainController',
	function mainController($scope, $http) {
		
		$http.get('/app/cssValidator').
		success(function(data, status, headers, config) {
			$scope.info = data;
			//console.log(data);
		}).
		error(function(data, status, headers, config) {
			console.log("Error " + data);
		});


	});