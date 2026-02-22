export function routeTrade(pair) {
  const dexes = ["Uniswap", "SushiSwap", "1inch"];
  const randomDex = dexes[Math.floor(Math.random() * dexes.length)];

  return {
    selectedDEX: randomDex,
    estimatedSlippage: (Math.random() * 0.5).toFixed(2) + "%"
  };
}
