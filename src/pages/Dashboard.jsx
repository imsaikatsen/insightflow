import React from 'react';
import mockData from '../data/mockData'; // Assuming mockData is in the same directory

function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-8 ml-64">
      <div className="text-3xl font-bold text-gray-800">Dashboard Overview</div>

      {/* System Metrics Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 text-2xl font-semibold text-gray-700">
          System Metrics
        </div>
        {mockData.systemMetrics.map((data) => (
          <div
            key={data.id}
            className={`bg-white shadow-md rounded-lg p-4 flex items-center justify-between h-40 ${
              data.status === 'critical'
                ? 'border-4 border-red-500'
                : 'border-4 border-green-500'
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{data.name}</h3>
              <p className="text-xl font-bold">{data.value}</p>
            </div>
            <span
              className={`text-sm font-semibold ${
                data.status === 'critical' ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {data.status}
            </span>
          </div>
        ))}
      </div>

      {/* User Analytics Section */}
      {/* <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 text-2xl font-semibold text-gray-700">
          User Analytics
        </div>
        {mockData.userAnalytics.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between h-40"
          >
            <div>
              <h3 className="text-lg font-semibold">{data.metric}</h3>
              <p className="text-xl font-bold">{data.value}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Financial Data Section */}
      {/* <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 text-2xl font-semibold text-gray-700">
          Financial Data
        </div>
        {mockData.financialData.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between h-40"
          >
            <div>
              <h3 className="text-lg font-semibold">{data.category}</h3>
              <p className="text-xl font-bold">{data.value}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Dashboard;
