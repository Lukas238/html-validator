'use strict';

describe("Testing Validator Controller", function(){
   beforeEach(module('mrmValidate'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("File Upload", function () {
       var $scope, $httpBackend, controller, mockFile, service;
        var fd = new FormData();
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

        beforeEach(function (){


            inject(function(ValidatorService, _$httpBackend_) {
                service = ValidatorService;
                $httpBackend = _$httpBackend_;
            });
        });

       /* it("", function(){
            expect(service.fileUpload(fd)).toBeDefined();
        });*/

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


        it("should make an ajax call to /validation", function () {

            fd.append('htmlFile', mockFile);
            fd.append('isResponsive', 'NO');

            var returnData = { valid: true, messages: {} };
            var url = 'http://localhost:3000/validation';
            $httpBackend.expectPOST(url).respond(returnData);
            var returnedPromise = service.fileUpload(fd);
            var result;
            returnedPromise.then(function(response) {
                result = response.data;
            });
            $httpBackend.flush();

            expect(result instanceof Object).toBeTruthy();
            expect(result).toEqual(returnData);



        });



    });
});

