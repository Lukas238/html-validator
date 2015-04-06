'use strict';

angular.module('validatorController', ['validatorService'])

.controller({
    'HtmlValidatorController': function($scope, $http, $upload, ValidatorService) {

        $scope.headHtml = ["Type", "Last Line", "Last Column", "First Colum", "Message", "Extract"];
        //$scope.infoHtml = {};

        $scope.submitFile = function(form) {

            function fileUploadError(response) {
                console.log("ERROR File Upload", response);
            };

            function fileUploadSuccess(response) {
                console.log("OK File Upload");
                $scope.infoHtml = response.data.messages.html.messages;

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
