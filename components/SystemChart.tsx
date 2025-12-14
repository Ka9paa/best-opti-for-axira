import React from 'react';

interface SystemChartProps {
  data: number[];
}

export function SystemChart({ data }: SystemChartProps) {
  const maxValue = Math.max(...data);

  return (
    <div className="relative h-64 bg-black/30 rounded-xl border border-gray-700/50 p-4">
      {/* Chart Area */}
      <div className="absolute inset-0 flex items-end justify-between p-4 gap-1">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative group">
            {/* Bar */}
            <div
              className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-300"
              style={{ height: `${(value / 100) * 100}%` }}
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-300 opacity-50 blur-sm"></div>
            </div>
            
            {/* Hover tooltip */}
            <div className="absolute -top-8 bg-gray-900 border border-blue-500/50 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {value}%
            </div>
          </div>
        ))}
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute left-2 top-4 bottom-16 flex flex-col justify-between text-gray-500 text-xs pointer-events-none">
        <span>100%</span>
        <span>80%</span>
        <span>60%</span>
        <span>40%</span>
        <span>20%</span>
        <span>0%</span>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-2 left-12 right-4 flex justify-between text-gray-500 text-xs pointer-events-none">
        <span>60s</span>
        <span>45s</span>
        <span>30s</span>
        <span>15s</span>
        <span>0s</span>
      </div>
    </div>
  );
}
