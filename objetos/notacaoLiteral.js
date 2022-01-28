const a = 1 
const b = 2
const c = 3

const obj1 = { a:a, b:b, c:c} // versão antiga

const obj2 = {a,b,c} // versao nova

console.log (obj1,obj2)

const obj3 = {}

const nomeattr = 'nota'
const valorattr = 7.87

obj3[nomeattr] = valorattr
console.log(obj3)

const obj4 = {[nomeattr]: valorattr}
console.log (obj4)

const obj5 ={
    funcao1: function (){ // antigo
        //...
    },
    funcao2 (){ // novo
        //...
    }
}