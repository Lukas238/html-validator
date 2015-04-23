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
    'HtmlValidatorController': function($scope, $http, $upload, $route, ValidatorService, cfpLoadingBar) {

        $scope.headHtml = ["Type", "Last Line", "Last Column", "First Colum", "Message", "Extract"];
        $scope.headCSS = ["Line", "Message"];
        $scope.headResponsive = ["Quantity", "Type", "Message"];
        $scope.showTab = false;
        $scope.showBack = false;
        $scope.showForm = true;
        $scope.isResponsive = 'NO';
        /**
         * @name $scope.submitFile
         * @function
         * @memberOf angular_module.MyModule.MyController
         * @description
         * @param form
         */

        $scope.start = function() {
          cfpLoadingBar.start();
        };

        $scope.complete = function () {
          cfpLoadingBar.complete();
        }

        $scope.submitFile = function(form) {

            function fileUploadError(response) {
                console.log("ERROR File Upload", response);
                $scope.complete();
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
                $scope.complete();

            };


            if (form.$valid) {
                $scope.start();
                var fd = new FormData();
                fd.append('isResponsive', $scope.isResponsive);
                fd.append('htmlFile', $scope.htmlFile[0]);

                ValidatorService.fileUpload(fd).then(fileUploadSuccess, fileUploadError);
            }

        };

        $scope.backButton = function() {
            /*$scope.showForm = true;
            $scope.showBack = false;
            $scope.showTab = false;
            $scope.isResponsive = 'NO';
            $scope.htmlFile = '';
            $scope.formFileUpload.$submitted = false;*/
            $route.reload();

        }



    }



});
