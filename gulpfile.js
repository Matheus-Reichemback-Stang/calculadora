// Faz as Funções Gerais
const gulp = require('gulp');
// Minifica o HTML
const htmlmin = require('gulp-htmlmin');
// Compila e Minifica o SASS
const sass = require('gulp-sass')(require('sass'));
// Cria um Mapa de rota
const sourcemaps = require('gulp-sourcemaps');
// Minifica o JavaScript
const uglify = require('gulp-uglify');

const compileSass = () => {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./dist/styles'))
}

const compileJS = () => {
    return gulp.src('./src/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

const compileHtml = () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
}



exports.default = gulp.parallel(compileHtml, compileSass, compileJS)
exports.watch = () => {
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.parallel(compileHtml))
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compileSass))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(compileJS))
}