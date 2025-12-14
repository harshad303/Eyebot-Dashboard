import { TimelineBucket } from '../types';

interface TimelineSectionProps {
  buckets: TimelineBucket[];
}

import { Clock, Users, DollarSign } from 'lucide-react';

const TimelineSection = ({ buckets }: TimelineSectionProps) => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 mt-6 shadow-lg border border-green-400/20">
      <h4 className="text-white font-bold mb-6 text-xl flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Glasses Purchase Timeline
      </h4>
      <div className="space-y-3">
        {buckets.map((bucket, index) => {
          const isLost = bucket.timeframe === 'No purchase yet';
          return (
            <div
              key={index}
              className={`bg-white/15 backdrop-blur-sm rounded-xl p-4 border ${
                isLost 
                  ? 'border-white/30 border-2 bg-white/10' 
                  : 'border-white/20 hover:bg-white/20 transition-colors'
              }`}
            >
              <div className="grid grid-cols-3 gap-6 text-white items-center">
                <div className="font-bold text-sm">{bucket.timeframe}</div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-100" />
                  <span className="font-semibold">{bucket.count.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <DollarSign className="w-4 h-4 text-green-100" />
                  {bucket.revenue > 0 ? (
                    <span className="font-bold text-base">${bucket.revenue.toLocaleString()}</span>
                  ) : (
                    <span className="opacity-80 font-semibold">Lost ${(bucket.count * (bucket.avgOrder || 0)).toLocaleString()}</span>
                  )}
                </div>
              </div>
              {bucket.note && (
                <div className="text-white text-xs mt-3 pt-3 border-t border-white/20 font-medium">
                  {bucket.note}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;

