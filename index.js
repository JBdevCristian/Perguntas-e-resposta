const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database') //exportando database

//database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//configurando expres para view engine
app.set("view engine", 'ejs')
app.use(express.static('public')); //definindo arquivos staticos (Arquivos de imagens css e etc)

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
    res.render("home")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;


    res.send("Formulario enviado titulo " + titulo + " " + "Descrição " + descricao);
});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})