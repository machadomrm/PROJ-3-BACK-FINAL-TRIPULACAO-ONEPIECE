const mongoose = require("mongoose");  //importando o mongoose

const bigmomsModel = new mongoose.Schema({
    nome: { type: String, required: true},
    ocupacao: { type: String, required: true},
    frutadodiabo: { type: String, required: true},
    imagemUrl: { type: String, required: true}, 
});

const Bigmom = mongoose.model("Big Mom",bigmomsModel);

module.exports = Bigmom;
