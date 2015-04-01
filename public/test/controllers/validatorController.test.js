'use strict';

describe("Testing Validator Controller", function(){
   beforeEach(module('mrmValidate'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("File Upload", function () {
       var $scope, $httpBackend, controller, mockFile;

        beforeEach(function(){
            $scope = {};
            
            controller = $controller('HtmlValidatorController', {$scope: $scope});
            mockFile = {
                webkitRelativePath: "",
                lastModified: 1426186387000,
                lastModifiedDate: "Thu Mar 12 2015 15:53:07 GMT-0300 (Hora estándar de Argentina)",
                name: "template.html",
                type: "text/html"
        };
        });
        it("The controller compares against 'undefined'", function () {
            expect(controller).toBeDefined();
        });

        it("The file compares against 'undefined' & type compares against 'text/html'", function () {
           expect(mockFile).toBeDefined();
           expect(mockFile.type).toEqual("text/html");
        });

        it("", function () {

        });

    });
});

/*describe("Testing Upload Controller", function() {
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

*/
