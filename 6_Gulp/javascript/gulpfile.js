const gulp = require('gulp')
const {series} = require('gulp') /* OU const series = gulp.serires */ 
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel  = require('gulp-babel')


function transformacaoJS(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('erro',err => console.log(err))
        .pipe(concat('bodigo.min.js'))
        .pipe(gulp.dest('build'))
    
    return cb()
}


function fim (cb){
    console.log('Fim!!!')
    return cb()
}
exports.default = series(transformacaoJS,fim)