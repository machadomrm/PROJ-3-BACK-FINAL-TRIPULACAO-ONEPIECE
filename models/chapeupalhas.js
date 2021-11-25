const mongoose = require("mongoose");  //importando o mongoose

const chapeupalhasModel = new mongoose.Schema({
    nome: { type: String, required: true},
    ocupacao: { type: String, required: true},
    frutadodiabo: { type: String, required: true},
    imagemUrl: { type: String, required: true}, 
});

const Chapeupalha = mongoose.model("Chapeu de Palha",chapeupalhasModel);

module.exports = Chapeupalha;
