'use strict';
angular.module('mrmConfiguration', []).
constant("serverConfiguration", (function() {
    var url = "http://localhost";
    var port = 3000;
    var publicApi = "/";

    return {
        getPublicApiPath: function() {
            return url + (port ? ':'+port : '') + publicApi;
        }
    };
})());
