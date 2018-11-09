var gulp = require('gulp');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
// var babel = require('gulp-babel');
var purgecss = require('gulp-purgecss');
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
	tmpCSS: localhost + 'tmp/**/*.css',
	tmpJS: localhost + 'tmp/**/*.js'
};

gulp.task('default', ['watch']);

gulp.task('html', function () {
    return gulp.src( paths.srcHTML )
        .pipe( gulp.dest( paths.tmp ) );
});

gulp.task('css', function () {
    return gulp
        .src( paths.srcSCSS )
        .pipe( sass() )
        .pipe( purgecss( { content: [ paths.srcHTML ] } ) )
        .pipe( gulp.dest( paths.tmp ) );
});

gulp.task('js', function () {
    return gulp
        // .src( paths.srcJS )
        .src( ['./src/js/data.js', './src/js/ui.js', './src/js/ctrl.js'] )
        // .pipe( babel( { presets: ['@babel/env'] } ) )
        .pipe( concat( 'script.js' ) )
        .pipe( gulp.dest( paths.tmp ) );
});

gulp.task('copy', ['html', 'css', 'js']);

gulp.task('inject', ['copy'], function () {
    var css = gulp.src(paths.tmpCSS, {read:false});
    var js = gulp.src(paths.tmpJS, {read:false});
    return gulp
        .src(paths.tmpHTML)
        .pipe(inject( css, { relative:true, removeTags:true } ))
        .pipe(inject( js, { relative:true, removeTags:true } ))
        .pipe( gulp.dest( paths.tmp ) )
        .pipe( livereload() );
});

gulp.task('watch', ['inject'], function () {
    livereload.listen();
    gulp.watch( paths.src, ['inject'] );
});
