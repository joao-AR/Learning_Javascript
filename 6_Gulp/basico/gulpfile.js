const gulp = require ('gulp')
const series = gulp.series

const antes1 = cb =>{
    //console.log ("antes1")
    return cb()
}

const antes2 = cb =>{
    //console.log ("antes2")
    return cb()
}


const fim = cb =>{
    console.log ("fim")
    return cb()
}
function copiar (callback){
    //gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') // vai pegar tudo dentro da pastaA que tem o fina .txt
        .pipe(gulp.dest('PastaB'))
    //console.log('tarefa de copiar')

    return callback()
}


module.exports.default = series(antes1,antes2,copiar,fim)