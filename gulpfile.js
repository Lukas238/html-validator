'use strict';

require('./gulp');

/*
* Dependencies
*/

/*var gulp = require ('gulp'),
    concat = require ('gulp-concat'),
    uglify = require ('gulp-uglify'),
    obfuscate = require ('gulp-obfuscate'),*/
    /*connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');*/



/*
* Configuration tasks
*/

/*gulp.task ('minify-obfuscate', function () {
    gulp.src (['public/app/*.js','public/app/* /*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('public/build/'))
});*/


/*gulp.task('webserver', function() {
  connect.server({
    root: './public/app',
    hostname: '0.0.0.0',
    port: 9000,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});*/

//gulp.watch(['public/app/*.js','public/app/*/*.js'], ['minify-obfuscate']);
