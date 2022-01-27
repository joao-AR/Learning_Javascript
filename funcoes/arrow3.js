let comparaThis = function (parametro){

    console.log (this === parametro)
}

comparaThis (global)

const obj = {}

comparaComThis = comparaThis.bind(obj)

comparaThis (global)
comparaThis (obj)

let comparaComThisArrow = parametro => console.log (this === parametro)

comparaComThisArrow (global)


comparaComThisArrow = comparaComThisArrow.bind(obj) // se a função foi escrita usando arrow o .bind não vai mudar a referencia do this

comparaComThisArrow (obj) // resultado falso


