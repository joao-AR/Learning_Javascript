
function classificaDia (dia){
    switch (dia){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "util"
        break

        case 1:
        case 7: 
        return "não util"
        break

        default:
            return "dia invalido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));
