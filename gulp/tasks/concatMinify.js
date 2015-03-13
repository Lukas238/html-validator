'use strict';


var gulp = require ('gulp');
var concat = require ('gulp-concat');
var uglify = require ('gulp-uglify');
var obfuscate = require ('gulp-obfuscate');

gulp.task ('minify-obfuscate', function () {
    gulp.src (['public/app/*.js', 'public/app/**/*.js', '!public/app/lib/bundle.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('public/build/'))
});
