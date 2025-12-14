import { PerformanceData } from '../types';

interface PerformanceChartProps {
  data: PerformanceData[];
  maxValue: number;
}

const PerformanceChart = ({ data, maxValue }: PerformanceChartProps) => {
  const gap = data[2].value - data[0].value; // Top 10% - You
  const opportunity = gap * 4680; // gap per test × total tests

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Performance vs Network</h2>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-24 text-sm font-medium text-gray-700 text-right flex items-center gap-2 ${item.isYou ? 'font-bold' : ''}`}>
              {item.isYou && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
              {item.label}
            </div>
            
            <div className="flex-1 bg-gray-100 rounded-full h-10 relative overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${item.color} ${item.isYou ? 'h-11' : ''}`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
            
            <div className="w-32 text-right text-base font-bold text-gray-900">
              ${item.value.toFixed(2)} /test
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          Gap to top 10%: ${gap.toFixed(2)}/test
        </div>
        <div className="text-sm font-semibold text-gray-900 mt-1">
          = ${opportunity.toLocaleString()}/mo total opportunity
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;

