import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CryptoChart = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-gray-300">Loading chart...</p>;

  const chartData = data.map((price, index) => ({
    name: `T-${data.length - index}`,
    price: parseFloat(price),
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#ffffff"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
