import express from "express";
import cors from "cors";

import cardapioRoutes from "./routes/cardapio.routes.js";
import contatoRoutes from "./routes/contato.routes.js";

const app = express();

const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Art Pão funcionando!"
  });
});

app.use("/api/cardapio", cardapioRoutes);
app.use("/api/contato", contatoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
