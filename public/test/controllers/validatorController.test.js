'use strict';

/*describe('HtmlValidatorControler', function(){
  var testController,
      testScope;
 
  beforeEach(function(){
    module('mrmValidate');
 
    inject(function($rootScope, $controller){
      testScope = $rootScope.$new();
      testController = $controller('HtmlValidatorControler', {
        $scope: testScope,
        /*SomeService: {
          refreshDefaults: function(){},
          registerItem: function(){},
          unRegisterItem: function(){}
        }*//*
      });
    });
  });
 
  it('has default messages', function(){
    expect(testScope.helloMsg).toBe('World!');
   // expect(testScope.errorMsg).toBe('');
  });
});*/


 describe("Testing Upload Controller", function() {
    beforeEach(angular.mock.module('mrmValidate'));
   // beforeEach(angular.mock.module('angularFileUpload'));

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

            it('returns http requests successfully and resolves the promise', function() {
                
                var data = '{"success":"true"}';                

                expect(httpController).toBeDefined();

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

/*describe('Unit Testing File Upload', function() {
    //To execute some code before every spec
    beforeEach(module('mrmValidate'));
    
    /*it('should have a HtmlValidatorControler controller', function() {
        expect(mrmValidate).toBeDefined();
    });*/
/*var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('HtmlValidatorControler', function(){
        it('should file upload', function(){
            var $scope = {};
            var controller = $controller('HtmlValidatorControler', { $scope: $scope });
            $scope.upload([File]);
            expect($scope.files).toBe([File]);
        });
    })

});*/

/*describe('Validate File', function(){
    //To execute some code before every spec
    beforeEach(module('mrmValidate'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('File upload', function(){
        it('Empty File', function(){
            var $scope = {};
            var controller = $controller('HtmlValidatorControler', { $scope: $scope });
            //expect($scope.files.isEmpty()).toEqual(true);
        });//it
    });


});*/
