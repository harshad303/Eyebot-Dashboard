import { Stage, Connection } from '../types';
import { Lightbulb } from 'lucide-react';

interface HorizontalFunnelProps {
  stages: Stage[];
  connections: Connection[];
}

const HorizontalFunnel = ({ stages, connections }: HorizontalFunnelProps) => {
  // Build array of items to render (stages and arrows)
  const items: Array<{ type: 'stage' | 'arrow'; data: any; index: number }> = [];
  
  stages.forEach((stage, index) => {
    items.push({ type: 'stage', data: stage, index });
    if (index < stages.length - 1) {
      items.push({ type: 'arrow', data: connections[index], index });
    }
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Journey</h2>
      
      <div className="grid grid-cols-7 gap-2 items-center">
        {items.map((item) => {
          if (item.type === 'stage') {
            const delays = [0, 150, 300, 450];
            return (
              <div key={`stage-${item.index}`} className="col-span-1">
                <div 
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${delays[item.index]}ms` }}
                >
                  <div className="mb-3 flex justify-center">
                    {item.data.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {item.data.count.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.data.label}
                  </div>
                </div>
              </div>
            );
          } else {
            const connection = item.data as Connection;
            return (
              <div key={`arrow-${item.index}`} className="col-span-1 relative group">
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-2xl text-gray-300">→</span>
                  <span
                    className={`text-sm font-semibold mt-1 ${
                      connection?.isPositive
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {connection?.isPositive ? '↑' : '↓'} {connection?.dropoffPercent}%
                  </span>
                </div>
                
                {/* Tooltip */}
                {connection?.dropoffCount && connection?.reasons && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-gray-900 text-white rounded-lg p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                    
                    {/* Header */}
                    <div className="font-semibold mb-3 text-sm">
                      Why did {connection.dropoffCount.toLocaleString()} people drop off?
                    </div>
                    
                    {/* Reasons list */}
                    <div className="space-y-2 mb-3">
                      {connection.reasons.slice(0, 3).map((reason, idx) => (
                        <div key={idx} className="text-xs text-gray-300">
                          • {reason.reason} ({reason.count.toLocaleString()} - {reason.percent}%)
                        </div>
                      ))}
                    </div>
                    
                    {/* Fix section */}
                    {connection.fix && (
                      <>
                        <div className="border-t border-gray-700 mt-3 pt-3">
                          <div className="flex items-start gap-2 text-xs">
                            <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <div className="font-semibold text-white mb-1">
                                {connection.fix.title}
                              </div>
                              <div className="text-gray-300 mb-1">
                                {connection.fix.impact}
                              </div>
                              <div className="text-green-400 font-semibold">
                                +{formatCurrency(connection.fix.revenue)}/mo
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
      
      {/* Summary Banner */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xs text-gray-700 mb-1">Completion Rate</div>
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-xs text-gray-500 mt-1">Target: 92%</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-700 mb-1">Rx Conversion</div>
            <div className="text-2xl font-bold text-gray-900">56%</div>
            <div className="text-xs text-green-600 mt-1">Network: 52%</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-700 mb-1">Glasses Attach</div>
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-xs text-green-600 mt-1">Excellent</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-700 mb-1">Avg Revenue</div>
            <div className="text-2xl font-bold text-gray-900">$42.14</div>
            <div className="text-xs text-gray-500 mt-1">per test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalFunnel;

