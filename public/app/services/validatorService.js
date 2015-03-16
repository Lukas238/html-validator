'use strict';


angular.module('validatorService', ['mrmConfiguration'])

.factory('ValidatorService', function($http, serverConfiguration) {
    var publicApiPath = serverConfiguration.getPublicApiPath().replace(/:([^:]*)$/, '\:$1');    
    
    var ValidatorService = function() {

          this.fileUpload = function(idEvent) {

                var servicePath = 'validation';
                var url = publicApiPath + servicePath;
                
                var fileUploadPromise = $http({
                    method: 'POST',
                    url: url,
                    withCredentials: true
                }).then(function(response) {
                    var data = response.data;
                    return data;
                });
                return fileUploadPromise;
            };

    }

    return new ValidatorService();
})
