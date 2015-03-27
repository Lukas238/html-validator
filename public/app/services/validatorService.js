'use strict';


angular.module('validatorService', ['mrmConfiguration'])

.factory('ValidatorService', function($http, serverConfiguration) {
    var publicApiPath = serverConfiguration.getPublicApiPath().replace(/:([^:]*)$/, '\:$1');

    var ValidatorService = function() {

        this.fileUpload = function(dto) {
            var servicePath = 'validation';
            var url = publicApiPath + servicePath;
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity,
                data: dto
            }

            return $http(req).success(function(data, status) {
                return  data;
            }).error(function(data, status) {
                return data;
            });

           
        };

    }

    return new ValidatorService();
})
