const bodyParser = require ('body-parser')
const express = require ('express')
const app = express() // instaciar express

app.use (express.static('.'))// ('.') detro da pasta atual sirva os arquivos estaticos
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const multer = require ('multer')

const storage = multer.diskStorage({
    destination: function (req,file,callback){
        callback (null,'./upload')
    },
    filename: function (req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')
app.get ('/teste',(req,resp) => resp.send('ok'))

app.post('/upload',(req,resp) => {
    upload(req,resp,err => {
        if (err){
            return resp.end ('ocorreu um erro')
        }

        resp.end('concluido com sucesso.')
    })
})
app.post ('/formulario',(req,resp) =>{
    resp.send({
        ...req.body,
        id:7
    })
})
app.listen (8080,()=> console.log ('executando...'))

app.get('/parOuImpar', (req, res)=>{
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})