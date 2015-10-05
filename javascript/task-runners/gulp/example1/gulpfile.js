var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var notify = require('gulp-notify');

// gulp.task('default', function() {
// 	console.log('Hello Gulp!');
// });

// gulp.task('default', function() {
// 	gulp.src('./src/css/**/*.css')
// 		.pipe(minifycss())
// 		.pipe(gulp.dest('./public/css'));
// });

gulp.task('css', function() {
	gulp.src('./src/stylus/**/*.styl')
		// .pipe(stylus({ compress: true }))
		.pipe(stylus())
		.pipe(minifycss())
		.pipe(gulp.dest('./public/css'))
		.pipe(notify('CSS OK!'));
});

gulp.task('default', function() {
	gulp.watch('./src/stylus/**/*.styl', ['css']);
});