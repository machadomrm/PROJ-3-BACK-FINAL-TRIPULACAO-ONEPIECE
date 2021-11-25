const mongoose = require("mongoose");  //importando o mongoose

const bigmomsModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Bigmom = mongoose.model("Big Mom",bigmomsModel);

module.exports = Bigmom;
