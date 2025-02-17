const mockData = {
  systemMetrics: [
    { id: 1, name: 'CPU Usage', value: '45%', status: 'normal' },
    { id: 2, name: 'Memory Usage', value: '72%', status: 'warning' },
    { id: 3, name: 'Disk Usage', value: '30%', status: 'normal' },
    { id: 4, name: 'Network Latency', value: '120ms', status: 'critical' },
  ],

  userAnalytics: [
    { id: 1, metric: 'Active Users', value: 1254 },
    { id: 2, metric: 'New Signups', value: 340 },
    { id: 3, metric: 'Bounce Rate', value: '52%' },
    { id: 4, metric: 'Avg. Session Duration', value: '3m 45s' },
  ],

  financialData: [
    { id: 1, category: 'Revenue', value: '$23,540' },
    { id: 2, category: 'Transactions', value: 412 },
    { id: 3, category: 'Refunds', value: 12 },
    { id: 4, category: 'Profit Margin', value: '18%' },
  ],
};

export default mockData;
