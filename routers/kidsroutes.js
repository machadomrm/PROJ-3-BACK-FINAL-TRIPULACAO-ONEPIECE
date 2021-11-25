const express = require("express"); //import do express
const router = express.Router(); //define app como express
const KidController = require('../controller/kids.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota kid ok"});
});

router.get("/readAll", KidController.getAll);

router.get("/readSingle/:id", KidController.getSingle);

router.post("/create", KidController.postCreate);

router.put("/update/:id", KidController.putUpdate);

router.delete("/delete/:id", KidController.delDelete);

module.exports = router;


