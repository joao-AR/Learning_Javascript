// await com correção de erro 

function gerar_numeros_entre(min,max,numeros_proibidos){

    if (min > max) [max,min] = [min,max]

    return new Promise ((resolve, reject) => {
    
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random()*fator)+ min

            if(numeros_proibidos.includes(aleatorio)){
                
                reject('Numero repetido')

            }else{
                resolve(aleatorio)
            }
    })
}

async function gerar_megasena (quantidade_numeros,tentativas = 1 ){
    
    try{
        const numeros = []
        for (let _ of Array(quantidade_numeros).fill()){
            
            numeros.push(await gerar_numeros_entre(1,60,numeros)) // await tem que ficar perto da função que vai retornar  uma promise 
            
        }
        return numeros

    }catch(e){
        
        if (tentativas > 10 ){
            throw "Não de certo"
        }else{
            return gerar_megasena(quantidade_numeros,tentativas + 1)
        }
        
    }

}

gerar_megasena(25)
    .then  (console.log)
    .catch (console.log)
