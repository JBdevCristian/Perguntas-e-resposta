const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database') //exportando database
const Pergunta = require("./database/Pergunta");

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
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("home", {
            perguntas: perguntas
        });
    });
    
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

//Salvando perguntas para o banco de dados
app.post("/salvarpergunta", (req, res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    });

});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined) { //pergunta encontrada
            res.render("pergunta", {
                pergunta: pergunta
            });
        } else { //não encontrada
            res.redirect("/")
        }
    });
});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})