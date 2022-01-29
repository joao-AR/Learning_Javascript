
function formatar (numero){

    return console.log (`sem alteração ${numero} \nusando Tofixed: ${numero.toFixed(2) }\nusando Tosting e replace : R$ ${numero.toFixed(2).toString().replace (".", ",")}`) 
    
    // toFixed permitir uma certa quantidades de casa 
    // toString tranformar em string
    // replace mudar digitos
    
}

formatar (0.1+0.2)