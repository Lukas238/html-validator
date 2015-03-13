'use strict';

var gulp   = require('gulp');
var clean  = require('gulp-clean');
var dir;
console.log(typeof dir);

gulp.task('build-clean', ['setdir', 'clean']);

gulp.task('setdir', function(cb) {
  try {
    dir = process.argv.slice(3);
    dir = dir.toString();
   
  } catch(e) {
    dir = '';
  }
  cb();
});

gulp.task('clean', ['setdir'], function () {
    return gulp.src(dir, {read: false})
               .pipe(clean());
});
