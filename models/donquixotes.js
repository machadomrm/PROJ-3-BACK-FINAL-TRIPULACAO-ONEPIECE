const mongoose = require("mongoose");  //importando o mongoose

const donquixotesModel = new mongoose.Schema({
    nome: { type: String, required: true},
    ocupacao: { type: String, required: true},
    frutadodiabo: { type: String, required: true},
    imagemUrl: { type: String, required: true}, 
});

const Donquixote = mongoose.model("Dopm Quixote",donquixotesModel);

module.exports = Donquixote;
