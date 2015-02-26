'use_strict';

angular.module('validatorService', [])

.factory('ValidatorService', function($http) {
    console.log("ValidatorService");
    var ValidatorService = function() {

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

    return new ValidatorService();
})
