import { Stage, Connection } from '../types';

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

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Journey</h2>
      
      <div className="grid grid-cols-7 gap-2 items-center">
        {items.map((item) => {
          if (item.type === 'stage') {
            return (
              <div key={`stage-${item.index}`} className="col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
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
            return (
              <div key={`arrow-${item.index}`} className="col-span-1 flex flex-col items-center justify-center">
                <span className="text-2xl text-gray-300">→</span>
                <span
                  className={`text-sm font-semibold mt-1 ${
                    item.data?.isPositive
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {item.data?.isPositive ? '↑' : '↓'} {item.data?.dropoffPercent}%
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HorizontalFunnel;

