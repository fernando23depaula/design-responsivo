'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('default',['sass','minify-html','imagemin']);
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('minify-html', function() {
  return gulp.src('src/templates/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('www'));
});

gulp.task('imagemin', function() {
   var imgSrc = './src/images/**/*.+(png|jpg|gif)',
   imgDst = './www/images/';
   
   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});
 
// gulp.task('watch', function () {
//   gulp.watch('./src/sass/**/*.scss', ['sass']);
//   gulp.watch('./src/templates/*.html', ['minify-html']);
//   gulp.watch('./src/images/**/*.+(png|jpg|gif)', ['imagemin']);

// });