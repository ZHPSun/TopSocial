const express = require("express");
const cardRouter = express.Router();
const {
  getCardByID,
  postCard,
  deleteCardById,
} = require("../controllers/cardsController");

//get card by id  /api/cards?id=1
cardRouter.get("/", getCardByID);

//post a card
cardRouter.post("/", postCard);

//delete card by id /api/cards/:card_id  :冒号是指动态参数
cardRouter.delete("/:card_id", deleteCardById);

module.exports = cardRouter;
