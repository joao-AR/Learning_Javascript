const funcs = []

for (var i=0; i < 10 ; i++){

    funcs.push (function(){
        console.log (i)
    })

}

funcs [2]()// só vai retornar 10
funcs[8]()
//---------------------------------------------------

const funcs2 = []

for (let f=0; f < 10 ; f++){

    funcs2.push (function(){
        console.log (f)
    })

}

funcs2 [2]()
funcs2 [8]()

