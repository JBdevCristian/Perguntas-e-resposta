const express = require("express");
const app = express();

//configurando expres para view engine
app.set("view engine", 'ejs')
app.use(express.static('public')); //definindo arquivos staticos (Arquivos de imagens css e etc)


app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMSG = false

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca", preco: 5},
        {nome: "Leite", preco: 1.45}

    ]

    res.render("home", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMSG,
        produtos: produtos
    })

});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})