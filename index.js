const express = require("express");
const app = express();

//configurando expres para view engine
app.set("view engine", 'ejs')
app.use(express.static('public')); //definindo arquivos staticos (Arquivos de imagens css e etc)


app.get("/", (req, res) => {
    res.render("home")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res)=> {
    
    res.send("Formulario enviado");
});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})