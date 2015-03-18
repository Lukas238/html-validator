'use strict';
console.log("configuration");
angular.module('mrmConfiguration', []).
constant("serverConfiguration", (function() {
    var url = "http://localhost";
    var port = 3000;
    var publicApi = "/";
   

    return {
        getPublicApiPath: function() {
            console.log("url");
            return url + ':' + port + publicApi;
        }
        
    };
})());
