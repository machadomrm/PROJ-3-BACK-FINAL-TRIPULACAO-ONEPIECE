const express = require("express"); //import do express
const router = express.Router(); //define app como express
const ChapeupalhaController = require('../controller/chapeupalhas.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota chapeu de palha ok"});
});

router.get("/readAll", ChapeupalhaController.getAll);

router.get("/readSingle/:id", ChapeupalhaController.getSingle);

router.post("/create", ChapeupalhaController.postCreate);

router.put("/update/:id", ChapeupalhaController.putUpdate);

router.delete("/delete/:id", ChapeupalhaController.delDelete);

module.exports = router;


