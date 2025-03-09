import React, { useEffect, useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useCryptoWebSocket from '../services/socketService';

const RealTimeChart = ({ symbol, title, color }) => {
  const price = useCryptoWebSocket(symbol);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (price) {
      setChartData((prevData) => {
        const newData = [
          ...prevData,
          { time: new Date().toLocaleTimeString(), price },
        ];
        return newData.slice(-15); // Keep only last 15 data points
      });
    }
  }, [price]);

  // Prevent unnecessary re-renders
  const memoizedChartData = useMemo(() => chartData, [chartData]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {memoizedChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={memoizedChartData}>
            <XAxis dataKey="time" tick={{ fill: '#666' }} />
            <YAxis domain={['auto', 'auto']} tick={{ fill: '#666' }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500">Waiting for data...</p>
      )}
    </div>
  );
};

export default RealTimeChart;
