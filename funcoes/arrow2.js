function pessoa (){
    this.idade = 0

    setInterval (()=> { // usando a função arrow o "this" fica fixo no contexto em que a função foi escrita 

        this.idade++
        console.log (this.idade)

    },1000)



}

new pessoa