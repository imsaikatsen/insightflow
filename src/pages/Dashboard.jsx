import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from '../features/dashboardSlice';
import SystemMetricsChart from '../components/SystemMetricsChart';
import MetricsDistributionChart from '../components/MetricsDistributionChart.jsx';
import MetricCards from '../components/MetricCards';

// Simulate API Call
const fetchDashboardData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'CPU Usage',
          value: Math.floor(Math.random() * 100),
          status: 'normal',
        },
        {
          id: 2,
          name: 'Memory Usage',
          value: Math.floor(Math.random() * 100),
          status: 'warning',
        },
        {
          id: 3,
          name: 'Disk Usage',
          value: Math.floor(Math.random() * 100),
          status: 'normal',
        },
        {
          id: 4,
          name: 'Network Latency',
          value: Math.floor(Math.random() * 200),
          status: 'critical',
        },
      ]);
    }, 1000)
  );
};

function Dashboard() {
  const dispatch = useDispatch();
  const { systemMetrics, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const data = await fetchDashboardData();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 50000); // Refresh data every 5 minute

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 p-8 ml-64">
      <div className="text-3xl font-bold text-gray-800">Dashboard Overview</div>

      {/* System Metrics Section */}
      <MetricCards data={systemMetrics} loading={loading} />

      {/* Charts Section */}
      <SystemMetricsChart data={systemMetrics} />
      <MetricsDistributionChart data={systemMetrics} />
    </div>
  );
}

export default Dashboard;
