const Kid = require("../models/kids"); 

exports.getAll = async (req,res) => {
    await Kid.find({}).then((kids) => {
        res.status(200).json(kids);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Kid.findById(req.params.id).then((kid) => {
        res.status(200).json(kid);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => {
    if(!req.body.nome){
        res.status(400).json({message: "nome esta vazio"});
        return;
    }
    if(!req.body.imagemUrl){
        res.status(400).json({message: "URL da imagem esta vazio"});
        return;
    }
    
    await Kid.create(req.body).then( () => {
        res.status(201).json({message: "Personagem inserido com sucesso!!!"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
};

exports.putUpdate = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    if(!req.body.nome){
        res.status(400).json({message: "nome esta vazio"});
        return;
    }
    if(!req.body.imagemUrl){
        res.status(400).json({message: "URL da imagem esta vazio"});
        return;
    }
    await Kid.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Personagem atualizado com sucesso!!!"});
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
};

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Kid.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Personagem deletado com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
};