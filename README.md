# Design Responsivo
Template responsivo utilizando o bootstrap como framework.

#Instale o apache
https://www.digitalocean.com/community/tutorials/como-instalar-a-pilha-linux-apache-mysql-php-lamp-no-ubuntu-16-04-pt

# Faça o clone do projeto
sudo apt-get install git
cd /var/www/html/
git clone https://github.com/fernando23depaula/design-responsivo.git

# Instale o gulp 
cd /var/www/html/design-responsivo
npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js

#Instale os plugins do gulp
cd /var/www/html/design-responsivo
npm install gulp-sass --save-dev
npm i gulp-htmlmin --save-dev

# Configurando o gulp
Abra o arquivo gulpfile.js e adicione as linhas:

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('default',['sass','minify-html','watch']);
 
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
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/templates/*.html', ['minify-html']);
});

Acesse http://localhost/design-responsivo/www
