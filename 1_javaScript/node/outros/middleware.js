// middleware pattern (chain of responsibility)

const passo1 = (contexto,next) =>{
    contexto.valor1 = 'mid1'
    next ()

    
}

const passo2 = (contexto,next)=>{
    contexto.valor2 = 'mid2'
    next()
} 



const passo3 = contexto => contexto.valor3 = 'mid3'


const exec = (contexto,...middlewares)=> {
   //console.log (middlewares)
    const execPasso = indice => {
        middlewares && indice < middlewares.length
        
        middlewares [indice](contexto,()=> execPasso(indice+1)) /// ()=> execPasso(indice+1) <- função next 
    }
    execPasso(0)
}

const contexto = {}

/*exec(contexto,passo1,passo2,passo3)
console.log (contexto)*/


/*exec(contexto,passo2,passo1,passo3)
console.log (contexto)*/

exec(contexto,passo3,passo1,passo2)// lebrando que passo 3 n possiu next 
console.log (contexto)