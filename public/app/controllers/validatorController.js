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
        $scope.headResponsive = ["Quantity", "Type", "Message"];
        $scope.showTab = false;
        $scope.showBack = false;
        $scope.showForm = true;
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
                $scope.showTab = true;
                $scope.infoHtml = response.html.messages;
                $scope.infoCss =  response.css;
                $scope.infoResponsive = response.responsive;
                $scope.infoCustom = {};
                $scope.showForm = false;
                $scope.showBack = true;

            };


            if (form.$valid) {                
                var fd = new FormData();
                fd.append('htmlFile', $scope.htmlFile[0]);
                fd.append('isResponsive', $scope.isResponsive || 'NO');               
                ValidatorService.fileUpload(fd).then(fileUploadSuccess, fileUploadError);
            }

        };

        $scope.backButton = function() {
            $scope.showForm = true;
            $scope.showBack = false;
            $scope.showTab = false;
            $scope.isResponsive = '';
            $scope.htmlFile = '';
            $scope.formFileUpload.$submitted = false;

        }



    }



});
