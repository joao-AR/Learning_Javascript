
function bissexto (ano){
    
    if (ano % 4 == 0){
        if (ano % 100 == 0 && ano % 400 != 0){
            return "false"
        }else return "true"
    }else return "false"
}


console.log (bissexto (2020))
console.log (bissexto (400))
console.log (bissexto (800))
console.log (bissexto (2100))
console.log (bissexto (2021))
console.log (bissexto (2024))