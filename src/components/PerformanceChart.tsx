import { PerformanceData } from '../types';

interface QuickWin {
  title: string;
  revenue: string;
}

interface PerformanceChartProps {
  data: PerformanceData[];
  maxValue: number;
  quickWins?: QuickWin[];
}

const PerformanceChart = ({ data, maxValue, quickWins }: PerformanceChartProps) => {
  const gap = data[2].value - data[0].value; // Top 10% - You
  const opportunity = gap * 4680; // gap per test × total tests

  return (
    <div className="bg-eyebot-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance vs Network</h2>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-24 text-sm font-medium text-gray-700 text-right flex items-center gap-2 ${item.isYou ? 'font-bold' : ''}`}>
              {item.isYou && <div className="w-2 h-2 rounded-full bg-eyebot-purple animate-pulse"></div>}
              {item.label}
            </div>
            
            <div className="flex-1 bg-gray-100 rounded-full h-10 relative overflow-hidden hover:opacity-80 transition-opacity duration-200">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out ${item.color} ${item.isYou ? 'h-11' : ''}`}
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                  transitionDelay: index === 0 ? '100ms' : index === 1 ? '300ms' : '500ms'
                }}
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
      
      {quickWins && quickWins.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-base font-semibold text-gray-900 mb-3">
            Quick Wins to Close Gap
          </div>
          <div className="space-y-2">
            {quickWins.map((win, index) => (
              <div key={index} className="flex items-center gap-3 py-2 text-sm">
                <div className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer hover:border-eyebot-purple transition-colors"></div>
                <div className="flex-1 text-gray-700">
                  {win.title} → <span className="font-semibold text-green-600">{win.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;

