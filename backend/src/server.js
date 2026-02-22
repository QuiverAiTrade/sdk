import express from "express";
import cors from "cors";
import { generateSignal } from "./aiEngine.js";
import { routeTrade } from "./router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  const { pair, price } = req.body;

  const signal = generateSignal(price);
  const route = routeTrade(pair);

  res.json({
    pair,
    signal,
    route
  });
});

app.listen(4000, () => {
  console.log("Quiver AI backend running on port 4000");
});
