'use strict';

/**
 * @module validatorService
 * @memberOf validatorController
 */
angular.module('validatorService', ['mrmConfiguration'])

.factory('ValidatorService', function($http, serverConfiguration) {
    var publicApiPath = serverConfiguration.getPublicApiPath().replace(/:([^:]*)$/, '\:$1');


    /**
     * @constructor ValidatorService
     */

    var ValidatorService = function() {

        /**
         * @function fileUpload
         * @memberOf mrmValidate.ValidatorService
         * @param dto
         * @returns {Object}
         */

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
