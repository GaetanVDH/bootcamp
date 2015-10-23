var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');

gulp.task('connect', function () {
  nodemon({
    script: 'server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('concat', function(){
  return gulp.src(['app/scripts/app.js', 'app/scripts/*.js'])
      .pipe(gp_concat('concat.js'))
      .pipe(gp_uglify())
      .pipe(gulp.dest('app/dist'));
});

gulp.task('serve', ['connect']);
gulp.task('default', ['concat', 'connect']);