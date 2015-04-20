'use strict';

/**
 * @module validatorController
 * @memberOf mrmValidate
 */
angular.module('validatorController', ['validatorService'])

.controller({

    /**
     * @function HtmlValidatorController
     * @param $scope
     * @param $http
     * @param $upload
     * @param ValidatorService
     */
    'HtmlValidatorController': function($scope, $http, $upload, ValidatorService) {

        $scope.headHtml = ["Type", "Last Line", "Last Column", "First Colum", "Message", "Extract"];
        $scope.headCSS = ["Line", "Message"];

        /**
         * @name $scope.submitFile
         * @function
         * @memberOf angular_module.MyModule.MyController
         * @description
         * @param form
         */
        $scope.submitFile = function(form) {

            function fileUploadError(response) {
                console.log("ERROR File Upload", response);
            };

            function fileUploadSuccess(response) {
                console.log("OK File Upload", response);
                $scope.infoHtml = response.html.messages;
                $scope.infoCss =  response.css;

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
