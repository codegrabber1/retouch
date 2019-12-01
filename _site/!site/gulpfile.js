"use strict";
const gulp    = require('gulp');
const sass    = require('gulp-sass');
const concat  = require('gulp-concat');
const notify  = require('gulp-notify');
const pipe    = require('multipipe');
const shell   = require('gulp-shell');
const bs      = require('browser-sync').create();

/*==== server ====*/
gulp.task('serve', function() {
    // Serve files from the root of this project
    bs.init({
        server: {baseDir: '_site/'}
    });
    bs.watch('_site/**/*.*').on('change', bs.reload);
});

gulp.task('sass', function(){
  return pipe(
    gulp.src('_sass/**/*.sass'),
    sass().on('error', sass.logError),
    concat('style.css'),
    gulp.dest('./')
  ).on('error', notify.onError());
});

gulp.task('watch', function(){
  gulp.watch('_sass/**/*.sass', gulp.series('sass'));
});

/*==== build ====*/
gulp.task('build', gulp.parallel('sass'));

/*==== DEV ====*/
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
