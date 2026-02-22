import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await axios.post("http://localhost:4000/analyze", {
      pair: "ETH/USDT",
      price: Number(price)
    });

    setResult(res.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Quiver AI</h1>
      <p>AI-Powered Decentralized Trading</p>

      <input
        type="number"
        placeholder="Enter ETH Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div>
          <h3>Signal: {result.signal}</h3>
          <p>Route: {result.route.selectedDEX}</p>
          <p>Slippage: {result.route.estimatedSlippage}</p>
        </div>
      )}
    </div>
  );
}
