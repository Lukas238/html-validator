'use strict';

angular.module('validatorController', ['validatorService'])

.controller({
    'HtmlValidatorControler': function($scope, $http, $upload, ValidatorService) {


        $scope.submitFile = function(form) {

            function fileUploadError(response) {
                console.log("ERROR File Upload", response);
            };

            function fileUploadSuccess(response) {
                console.log("OK File Upload", response.data);
            };


            if (form.$valid) {                
                var fd = new FormData();
                fd.append('htmlFile', $scope.htmlFile[0]);
                fd.append('isResponsive', $scope.isResponsive || 'NO');               
                ValidatorService.fileUpload(fd).then(fileUploadSuccess, fileUploadError);
            }

        };



    }



});
