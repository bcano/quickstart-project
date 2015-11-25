var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade'); // Gulp plugin to compile Jade templates.
var sass = require('gulp-sass'); // Gulp plugin to compiles Sass files (with the Sass gem).


// 'default' task configuration.
gulp.task('default', ['compileSass', 'compileJade', 'webServer']);


// 'compileJade' task configuration.
gulp.task('compileJade', function() {
  return gulp.src('app/jade/**/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('app/'));
});


// 'compileSass' task configuration.
gulp.task('compileSass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});


// 'webServer' task configuration.
gulp.task('webServer', function() {
  
  browserSync.init({
    server: "./app"
  });

  gulp.watch('app/jade/**/*.jade', ['compileJade']).on('change', browserSync.reload);
  gulp.watch('app/scss/**.scss', ['compileSass']).on('change', browserSync.reload);
  gulp.watch('app/scripts/**/*.js').on('change', browserSync.reload);

});