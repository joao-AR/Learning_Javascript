console.log (this === module.exports)
console.log (this===exports)

function logThis(){
    console.log('dentro de uma funçao..')
    console.log(this === exports)
    console.log (this===global)
    this.perigo ='...'// tomar cuidade pois dentro da funçao this aponta para global
}
logThis()
