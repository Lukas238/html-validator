'use strict';

angular.module('validatorController', ['validatorService'])

.controller({
    'HtmlValidatorControler': function($scope, $http, $upload, ValidatorService) {


        $scope.submitFile = function(form) {

            function fileUploadError(response) {
                console.log("ERROR File Upload 1", response);
            };

            function fileUploadSuccess(response) {
                console.log("OK File Upload", response);
            };


            if (form.$valid) {
                var formData = new FormData();
                formData.append("htmlFile", $scope.htmlFile);
                console.log("archivo", $scope.htmlFile)
                var files = {
                        formData,
                        "isResponsive": $scope.isResponsive || 'NO'
                    }
                    console.log("file",files);
                ValidatorService.fileUpload(files).then(fileUploadSuccess, fileUploadError);
            }

        };



    }



});
