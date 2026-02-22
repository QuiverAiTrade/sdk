export function generateSignal(price) {
  if (price < 1000) {
    return "BUY";
  } else if (price > 1500) {
    return "SELL";
  }
  return "HOLD";
}
