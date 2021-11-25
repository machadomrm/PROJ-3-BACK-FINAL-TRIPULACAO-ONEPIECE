const mongoose = require("mongoose");  //importando o mongoose

const barbanegrasModel = new mongoose.Schema({
    nome: { type: String, required: true},
    ocupacao: { type: String, required: true},
    frutadodiabo: { type: String, required: true},
    imagemUrl: { type: String, required: true}, 
});

const Barbanegra = mongoose.model("Barba Negra",barbanegrasModel);

module.exports = Barbanegra;
