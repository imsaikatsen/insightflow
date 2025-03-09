import { useEffect, useState } from 'react';

const useCryptoWebSocket = (symbol = 'btcusdt') => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.p).toFixed(2)); // Get price & format
    };

    return () => ws.close(); // Cleanup on unmount
  }, [symbol]);

  return price;
};

export default useCryptoWebSocket;
