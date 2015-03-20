'use strict';


angular.module('validatorService', ['mrmConfiguration'])

.factory('ValidatorService', function($http, serverConfiguration) {
    var publicApiPath = serverConfiguration.getPublicApiPath().replace(/:([^:]*)$/, '\:$1');

    var ValidatorService = function() {

        this.fileUpload = function(dto) {
            console.log('data', dto);
            var servicePath = 'validation';
            var url = publicApiPath + servicePath;

            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': undefined
                },
                data: dto,
            }

            return $http(req).success(function(data) {
                return "OK";
            }).error(function(data) {
                return "NO OK";
            });

            //return fileUploadPromise;

            /*var fileUploadPromise = $http({
                method: 'POST',
                url: url,
                data: dto,
                withCredentials: true
            }).then(function(response) {
                var data = response.data;
                return data;
            });*/
            //return fileUploadPromise;
        };

    }

    return new ValidatorService();
})
