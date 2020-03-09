const express = require("express")
const router = express.Router()

router.get('/',(req,res) => res.render("index"))
router.get('/busca',(req,res) => res.render("busca"))
router.post('/cadastro',(req,res) => res.render("cadastro"))
router.get('/anuncio',(req,res) => res.render("anuncio"))


module.exports = router