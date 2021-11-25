const express = require("express"); //import do express
const router = express.Router(); //define app como express
const DonquixoteController = require('../controller/donquixotes.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota donquixote ok"});
});

router.get("/readAll", DonquixoteController.getAll);

router.get("/readSingle/:id", DonquixoteController.getSingle);

router.post("/create", DonquixoteController.postCreate);

router.put("/update/:id", DonquixoteController.putUpdate);

router.delete("/delete/:id", DonquixoteController.delDelete);

module.exports = router;


