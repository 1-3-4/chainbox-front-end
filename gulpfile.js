var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

// Path to localhost on AspIT computer:
var localhost = 'C:/apps/xampp/htdocs/';
// Path to localhost on private computer:
// var localhost = 'C:/apps/wamp64/www/';

var paths = {
	src: 'src/**/*',
	srcHTML: 'src/**/*.html',
	srcSCSS: 'src/**/*.scss',
	srcJS: 'src/**/*.js',

	tmp: localhost + 'tmp',
	tmpHTML: localhost + 'tmp/**/*.html',
	tmpCSS: localhost + 'tmp/',
	tmpJS: localhost + 'tmp/'
};

gulp.task('default', ['watch']);

gulp.task('html', function () {
	return gulp.src(paths.srcHTML)
		.pipe(gulp.dest(paths.tmp))
		.pipe(livereload());
});

gulp.task('css', function () {
	return gulp.src(paths.srcSCSS)
		.pipe(sass())
		.pipe(gulp.dest(paths.tmpCSS))
		.pipe(livereload());
});

gulp.task('js', function () {
	return gulp.src(paths.srcJS)
        .pipe(concat('script.js'))
		.pipe(gulp.dest(paths.tmpJS))
		.pipe(livereload());
});

gulp.task('watch', ['html', 'css', 'js'], function () {
	livereload.listen();
	gulp.watch(paths.srcHTML, ['html']);
	gulp.watch(paths.srcSCSS, ['css']);
	gulp.watch(paths.srcJS, ['js']);
});
