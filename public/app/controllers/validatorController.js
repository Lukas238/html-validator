'use strict';

angular.module('validatorController', ['validatorService'])

.controller({
    'HtmlValidatorControler': function($scope, $http, $upload, ValidatorService) {


        $scope.submitFile = function(form) {

            if (form.$valid) {
                var fileUpload = {
                    "files": $scope.files,
                    "checkResponsibe": $scope.checkResponsibe || 'NO'
                }
                console.log("object", fileUpload);
            }

        };


        $scope.$watch('files', function() {
            //$scope.upload($scope.files);
        });

        /*$scope.upload = function(files) {

            if (files && files.length) {

                for (var i = 0; i < files.length; i++) {
                    var file = files[i];

                    $upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        fields: {
                            'username': $scope.username
                        },
                        file: file
                    }).progress(function(evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' +
                            evt.config.file.name);
                    }).success(function(data) {


                        console.log('file ' + config.file.name + 'uploaded. Response: ' +
                            JSON.stringify(data));
                    });
                }
            }
        };*/



        /*$http.get('/app/cssValidator').
        success(function(data, status, headers, config) {
            $scope.info = data;
            //console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("Error " + data);
        });*/



    }



});
