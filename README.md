# Design Responsivo
Template responsivo utilizando o bootstrap como framework.

#Instale o apache<br />
https://www.digitalocean.com/community/tutorials/como-instalar-a-pilha-linux-apache-mysql-php-lamp-no-ubuntu-16-04-pt

# Faça o clone do projeto
sudo apt-get install git<br />
cd /var/www/html/<br />
git clone https://github.com/fernando23depaula/design-responsivo.git

# Instale o gulp 
cd /var/www/html/design-responsivo<br />
npm install gulp-cli -g<br />
npm install gulp -D<br />
touch gulpfile.js<br />

#Instale os plugins do gulp
cd /var/www/html/design-responsivo <br />
npm install gulp-sass --save-dev<br />
npm i gulp-htmlmin --save-dev<br />

# Configurando o gulp
Abra o arquivo gulpfile.js e adicione as linhas:<br />
sudo vim gulpfile.js<br />

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('default',['sass','minify-html','watch']);
 
gulp.task('sass', function () {<br />
  return gulp.src('./src/sass/**/*.scss')<br />
    .pipe(sass().on('error', sass.logError))<br />
    .pipe(gulp.dest('./www/css'));<br />
});<br />

gulp.task('minify-html', function() {<br />
  return gulp.src('src/templates/*.html')<br />
    .pipe(htmlmin({collapseWhitespace: true}))<br />
    .pipe(gulp.dest('www'));<br />
});<br />
 
gulp.task('watch', function () {<br />
  gulp.watch('./src/sass/**/*.scss', ['sass']);<br />
  gulp.watch('./src/templates/*.html', ['minify-html']);<br />
});<br />

# Inicie o gulp
cd /var/www/html/design-responsivo<br />
Digite<br />
gulp<br />

Acesse http://localhost/design-responsivo/www
