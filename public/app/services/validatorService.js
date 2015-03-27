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
                transformRequest: angular.identity,
                data: dto,
            }

            return $http(req).success(function(res) {
                return res.data;
            }).error(function(data) {
                return res.data;
            });

           
        };

    }

    return new ValidatorService();
})
