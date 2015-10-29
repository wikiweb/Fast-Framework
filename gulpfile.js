var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['build']);
gulp.task('build', ['sass']);
gulp.task('sass', function(done) {
    gulp.src('scss/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./release/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});