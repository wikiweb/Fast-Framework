var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(done) {
    gulp.src('scss/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./release/css/'));
});

// Watch for changes in files
gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('./scss/**/*.scss', ['sass']);   
 });

gulp.task('default', ['sass', 'watch']);
