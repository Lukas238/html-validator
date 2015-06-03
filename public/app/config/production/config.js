'use strict';
angular.module('mrmConfiguration', []).
constant("serverConfiguration", (function() {
    var url = "http://app.emailvalidator.stage4.mrm.com.ar";
    var port = '';
    var publicApi = "/";

    return {
        getPublicApiPath: function() {
            return url + (port ? ':'+port : '') + publicApi;
        }
    };
})());
