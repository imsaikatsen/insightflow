import useCryptoWebSocket from '../services/socketService';

function Dashboard() {
  const btcPrice = useCryptoWebSocket('btcusdt'); // BTC to USDT
  const ethPrice = useCryptoWebSocket('ethusdt'); // ETH to USDT

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-100">
      {' '}
      {/* Adjusted for sidebar */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        📊 Crypto Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg transition hover:scale-105">
          <h2 className="text-lg font-semibold">Bitcoin Price</h2>
          <p className="text-3xl font-bold">${btcPrice || 'Loading...'}</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg transition hover:scale-105">
          <h2 className="text-lg font-semibold">Ethereum Price</h2>
          <p className="text-3xl font-bold">${ethPrice || 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
