var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var gulpif = require('gulp-if');
var eslint = require('gulp-eslint');
var debug = require('gulp-debug');
var browserSync = require('browser-sync').create();

gulp.task('default', ['sass', 'lint', 'bower', 'browser-sync']);
gulp.task('dist', ['sass', 'lint', 'html']);

gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles'));
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('lint', function () {
    return gulp.src(['scripts/*.js'])
        .pipe(debug())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('html', function () {
    var assets = useref.assets();
    return gulp.src('./*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
})

gulp.task('watch', function(){
    gulp.watch(['**/*.html'], ['reload']);
    gulp.watch(['**/*.scss'], ['build']);
});

gulp.task('bower', function(){
    gulp.src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('.'));
})

gulp.task('reload',function () {
    return gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('build', function() {
  runSequence('sass', 'reload');
});

gulp.task('connect',function () {
  connect.server({
    livereload: true
  });
});
