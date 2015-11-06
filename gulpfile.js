var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var gulpImports = require('gulp-imports');

gulp.task('sass', function(done) {
    gulp.src('scss/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./release/css/'));

    gulp.src('scripts/base.js') // path to your files		
    	.pipe(gulpImports())
		.pipe(concat('fast.js'))
		.pipe(gulp.dest('./release/js/'));
});


// Watch for changes in files
gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('./scss/**/*.scss', ['sass']);   
 });

gulp.task('default', ['sass', 'watch']);
