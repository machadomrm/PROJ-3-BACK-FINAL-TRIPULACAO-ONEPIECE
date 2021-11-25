const mongoose = require("mongoose");  //importando o mongoose

const donquixotesModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Donquixote = mongoose.model("Dopm Quixote",donquixotesModel);

module.exports = Donquixote;
