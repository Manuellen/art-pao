import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { nome, telefone, email, mensagem } = req.body;

  console.log("Nova mensagem recebida:");
  console.log({
    nome,
    telefone,
    email,
    mensagem
  });

  res.status(201).json({
    sucesso: true,
    mensagem: "Mensagem recebida com sucesso!"
  });
});

export default router;
