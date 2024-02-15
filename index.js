const express = require("express");
const app = express();

//configurando expres para view engine
app.set("view engine", 'ejs')

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMSG = false
    res.render("home", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMSG
    })

});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})