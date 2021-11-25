// comandos para iniciar o projeto
//npm init -y          inicia um projeto node
//npm i express        instala as dependencias do express
//npm i cors           instala a lib CORS para tratar as requisicoes
//npm i mongoose       instala a lib para trabalhar com mongo db
//npm i dotenv         instala a lib para tratativa de var de ambiente

const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config(); // config do .env para acessar as VARs de ambiente
const cors = require("cors");  // importando o CORS para nosso APP
app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./models/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

app.use(cors()); // usando o CORS no APP
app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

app.get('/', (req,res) => {
    res.status(200).json({message:"API Tripulações"});
});

const BarbanegrasRouter = require("./routers/barbanegras.routes");
app.use("/barbanegras", BarbanegrasRouter);

const BigmonsRouter = require("./routers/bigmoms.routes");
app.use("/bigmons", BigmonsRouter);

const ChapeupalhasRouter = require("./routers/chapeupalhas.routes");
app.use("/chapeupalhas", ChapeupalhasRouter);

const DonquixotesRouter = require("./routers/donquixotes.routes");
app.use("/donquixotes", DonquixotesRouter);

const KidsRouter = require("./routers/kids.routes");
app.use("/kids", KidsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
