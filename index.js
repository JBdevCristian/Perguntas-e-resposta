const express = require("express");
const app = express();

//configurando expres para view engine
app.set("view engine", 'ejs')

app.get("/", (req, res) => {
    res.render("home")
});

app.listen(8080,()=>{
    console.log("APP RODANDO!!")
})