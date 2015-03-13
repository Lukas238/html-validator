"use strict";

var gulp = require("gulp");
var browserify = require("gulp-browserify");


gulp.task("scripts", function () {
    gulp.src("public/app/main.js")
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('public/app/lib/bundle.js'))

});
