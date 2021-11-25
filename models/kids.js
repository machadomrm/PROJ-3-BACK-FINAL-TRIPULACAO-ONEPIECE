const mongoose = require("mongoose");  //importando o mongoose

const kidsModel = new mongoose.Schema({
    nome: { type: String, required: true},
    ocupacao: { type: String, required: true},
    frutadodiabo: { type: String, required: true},
    imagemUrl: { type: String, required: true},    
});

const Kid = mongoose.model("Kid",kidsModel);

module.exports = Kid;



