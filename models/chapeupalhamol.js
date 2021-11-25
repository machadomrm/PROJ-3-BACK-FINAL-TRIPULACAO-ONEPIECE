const mongoose = require("mongoose");  //importando o mongoose

const chapeupalhasModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Chapeupalha = mongoose.model("Chapeu de Palha",chapeupalhasModel);

module.exports = Chapeupalha;
