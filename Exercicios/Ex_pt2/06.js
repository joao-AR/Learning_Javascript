function inverte (elemento){
    if (typeof elemento == "boolean"){
        return console.log (!elemento)
    }else if (typeof elemento == "number"){
        //return console.log (elemento * -1) 
        return console.log (-elemento)
    }else{
        return console.log (`booleano ou número esperados, mas o parâmetro é do tipo ${typeof elemento}`)
    }
}

inverte (true)
inverte ("6")
inverte (-2000)
inverte ("palavras")