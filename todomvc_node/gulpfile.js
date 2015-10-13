var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;


gulp.task('default', ['sass', 'bower', 'browser-sync']);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
    gulp.watch("**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./scripts/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/styles'));
});

gulp.task('bower', function(){
    gulp.src('./app/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./app'));
});
