const express = require("express"); //import do express
const router = express.Router(); //define app como express
const BarbanegraController = require('../controller/barbanegras.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota barbanegra ok"});
});

router.get("/readAll", BarbanegraController.getAll);

router.get("/readSingle/:id", BarbanegraController.getSingle);

router.post("/create", BarbanegraController.postCreate);

router.put("/update/:id", BarbanegraController.putUpdate);

router.delete("/delete/:id", BarbanegraController.delDelete);

module.exports = router;


