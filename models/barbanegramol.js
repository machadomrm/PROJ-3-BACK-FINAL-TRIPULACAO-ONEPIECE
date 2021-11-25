const mongoose = require("mongoose");  //importando o mongoose

const barbanegrasModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Barbanegra = mongoose.model("Barba Negra",barbanegrasModel);

module.exports = Barbanegra;
