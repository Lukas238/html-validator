'use_strict';

/*describe("users", function(){
    it('order by default', function(){
        var users = ['jack', 'igor', 'jeff'];
        var sorted = sortUsers(users);
        expect(sorted).toEqual(['jeff', 'jack', 'igor']);
    });
});*/

/*describe('htmlValidatorControler', function() {
    beforeEach(module('mrmValidate'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.grade', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            var $scope = {};
            var controller = $controller('htmlValidatorControler', {
                $scope: $scope
            });
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});*/

/*describe('PasswordController', function() {
  beforeEach(module('mrmValidate'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('HtmlValidatorControler', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    /*it('sets the strength to "weak" if the password length <3 chars', function() {
      var $scope = {};
      var controller = $controller('HtmlValidatorControler', { $scope: $scope });
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });*/
//});
//});

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
