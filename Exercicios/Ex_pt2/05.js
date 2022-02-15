function compara (n1,n2){
    if (typeof n1  === typeof n2){
        if  (n1>= n2){
            return true

        }else{
            return false
        }
    }else{
        return false
    }
}

console.log (compara(5,1))
console.log (compara(0,"0"))
console.log (compara(0,0))
console.log (compara(1,5))