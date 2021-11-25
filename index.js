<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f051ea191029d8adcf5a209b4bce45ba254f7ebb
// comandos para iniciar o projeto
//npm init -y          inicia um projeto node
//npm i express        instala as dependencias do express
//npm i cors           instala a lib CORS para tratar as requisicoes
//npm i mongoose       instala a lib para trabalhar com mongo db
//npm i dotenv         instala a lib para tratativa de var de ambiente

<<<<<<< HEAD
const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config(); // config do .env para acessar as VARs de ambiente
const cors = require("cors");  // importando o CORS para nosso APP
app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./models/conn/index"); //importando a conexao

Conn(); //executa a func de conexao
=======
// require("dotenv").config(); // config do .env para acessar as VARs de ambiente
// const express = require("express"); //chamando o express
// const connectMongoDB = require("./database/database"); //chamando o database
// const routes = require("./src/routes/routes"); // chamando as rotas
// const cors = require("cors"); // importando o CORS para APP

// const app = express(); //definindo o app como express
// const port = process.env.PORT || 3000; //definindo as portas
// app.use(cors()); // usando o CORS no APP
// app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

// app.use(express.json());
// app.use(routes);

// app.listen(port, () =>
//     console.log(`Servidor rodando em http://localhost:${port}`)
// );

//ESSE É DO PROFESSOR
const express = require("express"); //chamando o express
const app = express(); //definindo o app como express
require("dotenv").config(); // config do .env para acessar as VARs de ambiente
const cors = require("cors"); // importando o CORS para nosso APP
app.use(express.json()); //definindo o JSON no projeto
const connectMongoDB = require("./database/database");
// const Conn = require("./models/conn/index"); //importando a conexao

// Conn(); //executa a func de conexao
>>>>>>> f051ea191029d8adcf5a209b4bce45ba254f7ebb

app.use(cors()); // usando o CORS no APP
app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

<<<<<<< HEAD
app.get('/', (req,res) => {
    res.status(200).json({message:"API Tripulações ok"});
});

const BarbanegrasRouter = require("./routers/barbanegrasroutes");
app.use("/barbanegras", BarbanegrasRouter);

const BigmomsRouter = require("./routers/bigmomsroutes");
app.use("/bigmoms", BigmomsRouter);

const ChapeupalhasRouter = require("./routers/chapeupalhasroutes");
app.use("/chapeupalhas", ChapeupalhasRouter);

const DonquixotesRouter = require("./routers/donquixotesroutes");
app.use("/donquixotes", DonquixotesRouter);

const KidsRouter = require("./routers/kidsroutes");
app.use("/kids", KidsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
=======
app.get("/", (req, res) => {
    res.status(200).json({ message: "Servidor rodando" });
});

const BarbaNegraRouter = require("./routers/barba_negra.routers");
app.use("/barba_negra", BarbaNegraRouter);

const BigMomRouter = require("./routers/big_mom.routers");
app.use("/big_mom", BigMomRouter);

const ChapeuPalhaRouter = require("./routers/chapeu_palha.routers");
app.use("/chapeu_palha", ChapeuPalhaRouter);

const DonQuixoteRouter = require("./routers/donquixote.routers");
app.use("/donquixote", DonQuixoteRouter);

const KidRouter = require("./routers/kid.routers");
app.use("/kid", KidRouter);

connectMongoDB();

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
=======
// const express = require('express');
// const db = require("./mongooseConfig")
// const consign = require('consign');

// class App {

//     constructor(){
//         this.init = express();
//         this.db = db;
//         this.envVar();
//         this.midd();
//         this.routes();//rotas adicionado
//     }

//     envVar(){
//         this.init.set('port', process.env.PORT);
//     }

//     midd(){
//         this.init.use(express.json());
//     }

//     routes(){
//         consign({cwd:'api'}) //api definido como current working directory
//             .include('routers/index.js') //path onde será enviado o this.init
//             .into(this.init)
//     }
// }

// module.exports = new App().init
>>>>>>> 8cbd1fc9687769c523cb8b37babb072615d8289e
>>>>>>> f051ea191029d8adcf5a209b4bce45ba254f7ebb
