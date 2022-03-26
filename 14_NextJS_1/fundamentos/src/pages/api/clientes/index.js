export default function handler(req,res){

    if(req.method === "GET"){
        handleGet(req,res)
    }else{
        res.status(405).send() // metodo não suportado 
    }
    
}

function handleGet(){
    res.status(200).json({
        id: 3,
        nome: 'maria',
        email: 'maria@email.com'
    })
}
