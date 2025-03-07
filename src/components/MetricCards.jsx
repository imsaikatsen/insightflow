import React from 'react';

function MetricCards({ data, loading }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 text-2xl font-semibold text-gray-700">
        System Metrics
      </div>

      {loading ? (
        <p className="text-center col-span-3">Loading...</p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className={`bg-white shadow-md rounded-lg p-4 flex items-center justify-between h-40 ${
              item.status === 'critical'
                ? 'border-4 border-red-500'
                : 'border-4 border-green-500'
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
            <span
              className={`text-sm font-semibold ${
                item.status === 'critical' ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {item.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default MetricCards;
