import express from "express";
import cardapio from "../data/cardapio.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(cardapio);
});

export default router;
