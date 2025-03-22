import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useCryptoWebSocket from '../services/socketService';

function Analytics() {
  const { price: btcPrice, history: btcHistory } =
    useCryptoWebSocket('btcusdt');
  const { price: ethPrice, history: ethHistory } =
    useCryptoWebSocket('ethusdt');
  const [btcChange, setBtcChange] = useState(0);
  const [ethChange, setEthChange] = useState(0);

  useEffect(() => {
    if (btcHistory.length > 1) {
      const firstPrice = btcHistory[0];
      const lastPrice = btcHistory[btcHistory.length - 1];
      setBtcChange((((lastPrice - firstPrice) / firstPrice) * 100).toFixed(2));
    }
  }, [btcHistory]);

  useEffect(() => {
    if (ethHistory.length > 1) {
      const firstPrice = ethHistory[0];
      const lastPrice = ethHistory[ethHistory.length - 1];
      setEthChange((((lastPrice - firstPrice) / firstPrice) * 100).toFixed(2));
    }
  }, [ethHistory]);

  return (
    <div className="p-6 sm:ml-64 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📊 Crypto Analytics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsCard
          title="Bitcoin Trend"
          price={btcPrice}
          change={btcChange}
          history={btcHistory}
        />
        <AnalyticsCard
          title="Ethereum Trend"
          price={ethPrice}
          change={ethChange}
          history={ethHistory}
        />
      </div>
    </div>
  );
}

const AnalyticsCard = ({ title, price, change, history }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold">${price || 'Loading...'}</p>
    <p className={`text-md ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change}% {change >= 0 ? '📈' : '📉'}
    </p>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={history.map((price, index) => ({
          name: `T-${index}`,
          price: parseFloat(price),
        }))}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#2563EB"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Analytics;
