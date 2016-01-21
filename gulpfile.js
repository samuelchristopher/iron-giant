
var gulp     = require('gulp');
var sass     = require('gulp-sass');
var gulpJade = require('gulp-jade');
var connect  = require('gulp-connect');
var jade     = require('jade');

gulp.task('html', function() {
  var config = {
    jade: jade
  };

  return gulp.src('./src/jade/index.jade')
        .pipe(gulpJade(config))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: './build',
    livereload: true
  });
}) ;

gulp.task('css', function() {
  var config = {};
  // config.outputStyle = 'compressed';

  return gulp.src('./src/styles/main.sass')
        .pipe(sass(config))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/jade/**', ['html']);
  gulp.watch('./src/styles/**', ['css']);
});

gulp.task('default', ['html', 'connect', 'css', 'watch']);
