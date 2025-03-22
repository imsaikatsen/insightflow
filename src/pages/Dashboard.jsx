import { useEffect } from 'react';
import useCryptoWebSocket from '../services/socketService';
import CryptoChart from '../components/CryptoChart';

function Dashboard() {
  const {
    price: btcPrice,
    trend: btcTrend,
    history: btcHistory,
  } = useCryptoWebSocket('btcusdt');
  const {
    price: ethPrice,
    trend: ethTrend,
    history: ethHistory,
  } = useCryptoWebSocket('ethusdt');

  // Request notification permission
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (btcTrend !== 'Stable' && Notification.permission === 'granted') {
      new Notification(`📈 BTC Alert`, {
        body: `Bitcoin is in a ${btcTrend}! Price: $${btcPrice}`,
      });
    }
  }, [btcTrend]);

  useEffect(() => {
    if (ethTrend !== 'Stable' && Notification.permission === 'granted') {
      new Notification(`📈 ETH Alert`, {
        body: `Ethereum is in a ${ethTrend}! Price: $${ethPrice}`,
      });
    }
  }, [ethTrend]);

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📊 Crypto Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <CryptoCard
          title="Bitcoin Price"
          price={btcPrice}
          trend={btcTrend}
          history={btcHistory}
        />
        <CryptoCard
          title="Ethereum Price"
          price={ethPrice}
          trend={ethTrend}
          history={ethHistory}
        />
      </div>
    </div>
  );
}

const CryptoCard = ({ title, price, trend, history }) => (
  <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl font-bold">${price || 'Loading...'}</p>
    <p className="text-sm">{trend}</p>
    <CryptoChart data={history} />
  </div>
);

export default Dashboard;
