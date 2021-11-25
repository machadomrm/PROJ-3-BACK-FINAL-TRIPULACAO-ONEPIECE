const mongoose = require("mongoose");  //importando o mongoose

const kidsModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Kid = mongoose.model("Kid",kidsModel);

module.exports = Kid;
