'use strict';

var gulp = require ('gulp');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');


gulp.task('webserver', function() {
  connect.server({
    root: './public/app',
    hostname: '0.0.0.0',
    port: 9000,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});
