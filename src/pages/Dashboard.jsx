import useCryptoWebSocket from '../services/socketService';
import RealTimeChart from '../components/RealTimeChart';

function Dashboard() {
  const btcPrice = useCryptoWebSocket('btcusdt'); // BTC to USDT
  const ethPrice = useCryptoWebSocket('ethusdt'); // ETH to USDT

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📊 Crypto Dashboard
      </h1>

      {/* Price Cards */}
      <div className="grid grid-cols-2 gap-6">
        {btcPrice && (
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg transition hover:scale-105">
            <h2 className="text-lg font-semibold">Bitcoin Price</h2>
            <p className="text-3xl font-bold">${btcPrice}</p>
          </div>
        )}
        {ethPrice && (
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg transition hover:scale-105">
            <h2 className="text-lg font-semibold">Ethereum Price</h2>
            <p className="text-3xl font-bold">${ethPrice}</p>
          </div>
        )}
      </div>

      {/* Real-Time Charts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {btcPrice && (
          <RealTimeChart
            symbol="btcusdt"
            title="Bitcoin Price Trend"
            color="#4F46E5"
          />
        )}
        {ethPrice && (
          <RealTimeChart
            symbol="ethusdt"
            title="Ethereum Price Trend"
            color="#16A34A"
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
