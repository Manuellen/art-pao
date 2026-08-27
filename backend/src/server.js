import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import cardapioRoutes from "./routes/cardapio.routes.js";
import contatoRoutes from "./routes/contato.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

const origensPermitidas = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origensPermitidas.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origem não permitida pelo CORS"));
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Art Pão funcionando!",
  });
});

app.use("/api/cardapio", cardapioRoutes);
app.use("/api/contato", contatoRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
