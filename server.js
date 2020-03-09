//IMPORTACOES 
const express = require("express")
const bodyParser = require("body-parser")
const routers = require('./routers')

//INSTANCIA DO FRAMEWORK EXPRESS
const app = express()

//COFIGURANDO CAMDAS DE VIEWS
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views")

//CONFIGURANDO CONTEUDO STATICS
app.use(express.static(__dirname + "/public"))

//configurar o request body
app.use(bodyParser.urlencoded({extended:true}))

//ROTAS DA APLICAÇÂO
app.use(routers)

// Escutando a prota 3000
app.listen(3000,()=>console.log("Servidor funcionando na porta 3000."))