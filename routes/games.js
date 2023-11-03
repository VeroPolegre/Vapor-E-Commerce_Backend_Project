const express = require("express");
const router = express.Router();

const GameController = require("../controllers/GameController");

router.post("/", GameController.create);
router.put("/id/:id", GameController.update);
router.delete("/id/:id", GameController.delete);
router.get("/", GameController.getAll);
router.get("/id/:id", GameController.getById);
router.get("/title/:title", GameController.getByTitle);
router.get("/price/:price", GameController.getByPrice);
router.get("/desc-price", GameController.getByDescendingPrice);
module.exports = router;
