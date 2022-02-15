function soNUmeros (array){
    let resultado = []
    array.forEach(function(elemento,indice){
       
       if (typeof elemento == "number"){
           resultado.push(elemento)
       }
    })
    console.log (resultado)
}


/*function filtrarNumeros(array) {
return array.filter(item => typeof item === "number") O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
}*/


soNUmeros ((["Javascript", 1, "3", "Web", 20]))
soNUmeros ((["a","c"]))