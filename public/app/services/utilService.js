'use_strict';

angular.module('utilService', [])

.factory('UtilService', function($http) {
	console.log("UtilService");
	var UtilService = function() {


		this.fileUpload = function(files){
			if (files && files.length) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					$upload.upload({
						url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
						fields: {
							'username': $scope.username
						},
						file: file
					}).progress(function(evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						console.log('progress: ' + progressPercentage + '% ' +
							evt.config.file.name);
					}).success(function(data, status, headers, config) {
						console.log('file ' + config.file.name + 'uploaded. Response: ' +
							JSON.stringify(data));
					});
				}
			}
			return fileUpload;
		};

		/*this.getCookiePolicy = function() {
			var getCookiePolicy = $http({
				method: 'GET',
				url: '../../src/models/cookie-policy.json',
				withCredentials: true
			}).then(function(response) {
				return response.data;
			});

			return getCookiePolicy;
		};*/

	}

	return new UtilService();
})