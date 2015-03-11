'use strict';

describe("Testing Upload Controller", function() {
    beforeEach(angular.mock.module('mrmValidate'));
   
    describe("FileUploadController", function() {
        var $scope, $upload, $rootScope;

        beforeEach(inject(function($injector) {
            $upload = $injector.get('$upload');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();

            var $controller = $injector.get('$controller');

            var createController = function() {
                return $controller('HtmlValidatorControler', {
                    '$scope': $scope
                });
            };
            var controller = createController();
        }));

        describe("UploadFile", function() {
            var $httpBackend, promise, successCallback, errorCallback, httpController, mockFile;
            var expectedUrl = 'https://angular-file-upload-cors-srv.appspot.com/upload';

            beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
                $httpBackend = _$httpBackend_;
                var scope = $rootScope.$new();
                successCallback = jasmine.createSpy();
                errorCallback = jasmine.createSpy();
                httpController = $controller('HtmlValidatorControler', {
                    '$scope': scope
                });
                
                mockFile = {data:"asas",method:"POST",url:expectedUrl,file:[{"name":"File 1", "body":"abcd121212"}]};

            }));

            it("The 'mockFile' & 'httpController' matcher compares against 'undefined'", function () {
                expect(httpController).toBeDefined();

                expect(mockFile).toBeDefined();               

            });

            it('returns http requests successfully and resolves the promise', function() {
                
                var data = '{"success":"true"}';       
               
                $httpBackend.expectPOST(expectedUrl).respond(200, data);                

                promise = $upload.upload(mockFile);                

                promise.then(successCallback, errorCallback);

                $httpBackend.flush();

                //expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));

                expect(errorCallback).not.toHaveBeenCalled();
            });

        });
    });
}); 

