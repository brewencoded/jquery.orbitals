/* jshint node: true */
/* jslint node: true */
'use strict';

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

///////////////////////////////////////////////////
// JS
///////////////////////////////////////////////////

gulp.task('concat-js', ['minify-js'],  function () {
	return gulp.src('js/**/*.min.js')
			.pipe(plumber())
			.pipe(concat('jquery.orbitals.min.js'))
			.pipe(gulp.dest('dist/js'))
			.pipe(browserSync.stream());
});

gulp.task('minify-js', function () {
	return gulp.src('js/jquery.orbitals.js')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(rename('jquery.orbitals.min.js'))
			.pipe(sourcemaps.write('../dist/maps'))
			.pipe(gulp.dest('js'));
});

gulp.task('js-watch', ['concat-js'], browserSync.reload);

///////////////////////////////////////////////////
// CSS
///////////////////////////////////////////////////

gulp.task('lib-css', ['user-css'], function () {
	return gulp.src('css/orbitals.css')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(minifyCss())
			.pipe(rename('orbitals.min.css'))
			.pipe(sourcemaps.write('../dist/maps'))
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.stream());
});

gulp.task('user-css', function () {
	return gulp.src('css/style.css')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(minifyCss())
			.pipe(rename('style.min.css'))
			.pipe(sourcemaps.write('../dist/maps'))
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.stream());
});

///////////////////////////////////////////////////
// HTML
///////////////////////////////////////////////////

gulp.task('html', function () {
	return gulp.src('index.html')
			.pipe(plumber())
			.pipe(gulp.dest('dist'))
			.pipe(browserSync.stream());
});

///////////////////////////////////////////////////
// Browser reloading
///////////////////////////////////////////////////

gulp.task('browser-sync', function () {
	browserSync.init({
        server: "./dist"
    });

    gulp.watch('js/*.js', ['js-watch']);
    gulp.watch('css/*.css', ['lib-css']);
    gulp.watch('index.html', ['html']);
});

///////////////////////////////////////////////////
// Task Chains
//////////////////////////////////////////////////
gulp.task('default', ['html', 'concat-js', 'lib-css', 'browser-sync']);