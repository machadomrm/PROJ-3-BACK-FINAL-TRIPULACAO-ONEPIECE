const express = require("express"); //import do express
const router = express.Router(); //define app como express
const BigmomController = require('../controller/bigmoms.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota big mom ok"});
});

router.get("/readAll", BigmomController.getAll);

router.get("/readSingle/:id", BigmomController.getSingle);

router.post("/create", BigmomController.postCreate);

router.put("/update/:id", BigmomController.putUpdate);

router.delete("/delete/:id", BigmomController.delDelete);

module.exports = router;


