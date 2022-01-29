
function bhaskara (a,b,c){
    const delta = (b**2 - 4*a*c)
    if (delta < 0){
        return "Delta é negativo"
    }else{
    
        let resultado = [ ] 
        let x1 =(-b + Math.sqrt(delta))/2*a
        let x2 = (-b - Math.sqrt(delta))/2*a
        resultado.push(x1)
        resultado.push(x2)

        return resultado

    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
