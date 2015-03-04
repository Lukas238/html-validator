/*
* Dependencies
*/

var gulp = require ('gulp'),
    concat = require ('gulp-concat'),
    uglify = require ('gulp-uglify'),
    obfuscate = require ('gulp-obfuscate');


/*
* Configuration tasks
*/

gulp.task ('minify-obfuscate', function () {
    gulp.src (['public/app/*.js','public/app/*/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('public/build/'))
});

gulp.watch(['public/app/*.js','public/app/*/*.js'], ['minify-obfuscate']);
