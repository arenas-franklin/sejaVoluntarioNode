//IMPORTACOES 
const express = require("express")

//INSTANCIA DO FRAMEWORK EXPRESS
const app = express()

//COFIGURANDO CAMDAS DE VIEWS
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views")

//CONFIGURANDO CONTEUDO STATICS
app.use(express.static(__dirname + "/public"))

//ROTAS DA APLICAÇÂO
app.get('/',(req,res)=>res.render("index"))
app.get('/busca',(req,res)=>res.render("busca"))
app.get('/cadastro',(req,res)=>res.render("cadastro"))
app.get('/anuncio',(req,res)=>res.render("anuncio"))


// Escutando a prota 3000
app.listen(3000,()=>console.log("Servidor funcionando na porta 3000."))