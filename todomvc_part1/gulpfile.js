var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;

gulp.task('default', ['sass', 'bower', 'browser-sync']);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles'));
});

gulp.task('bower', function(){
    gulp.src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('.'));
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
});