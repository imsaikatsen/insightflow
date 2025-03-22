import { useEffect, useState } from 'react';

const useCryptoWebSocket = (symbol = 'btcusdt') => {
  const [price, setPrice] = useState(null);
  const [trend, setTrend] = useState('stable');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p).toFixed(2);

      setPrice(newPrice);
      setHistory((prev) => [...prev.slice(-9), newPrice]); // Keep last 10 prices

      // Detect trend
      if (prev.length > 1) {
        const lastPrice = prev[prev.length - 1];
        if (newPrice > lastPrice) setTrend('📈 Uptrend');
        else if (newPrice < lastPrice) setTrend('📉 Downtrend');
        else setTrend('Stable');
      }
    };

    return () => ws.close(); // Cleanup
  }, [symbol]);

  return { price, trend, history };
};

export default useCryptoWebSocket;
