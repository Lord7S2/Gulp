const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// ==========================
// SASS
// ==========================
function compilaSass() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// ==========================
// JS
// ==========================
function comprimeJS() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// ==========================
// IMAGENS
// ==========================
function comprimeImagens() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// ==========================
// EXPORTAÇÕES
// ==========================
exports.sass = compilaSass;
exports.js = comprimeJS;
exports.images = comprimeImagens;

// tarefa padrão (executa tudo)
exports.default = gulp.parallel(compilaSass, comprimeJS, comprimeImagens);