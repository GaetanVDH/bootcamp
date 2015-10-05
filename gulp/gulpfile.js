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

gulp.task('default', ['sass', 'lint', 'connect', 'watch']);
gulp.task('dist', ['sass', 'lint', 'html']);

gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles'));
})

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
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
