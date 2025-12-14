import { ArrowDown } from 'lucide-react';
import { DropoffData } from '../types';
import RecommendationCard from './RecommendationCard';

interface DropoffSectionProps {
  dropoff: DropoffData;
  recommendations?: Array<{
    title: string;
    impact: string;
    revenue: string;
    effort?: string;
    confidence?: string;
  }>;
}

const DropoffSection = ({ dropoff, recommendations }: DropoffSectionProps) => {
  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 mb-6 shadow-lg border border-red-400/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-bold text-lg">
          Lost {dropoff.percentage}% ({dropoff.lost.toLocaleString()} people)
        </span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">❌</span>
        <span className="text-white font-bold text-base uppercase tracking-wide">{dropoff.label}</span>
      </div>
      <div className="mb-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
        <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wide">Top reasons:</h4>
        <ul className="space-y-2.5">
          {dropoff.reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-3 text-white">
              <span className="font-bold text-red-100 mt-0.5">{reason.percentage}%</span>
              <span className="text-sm flex-1">{reason.description}</span>
              <span className="text-xs text-red-100 font-medium bg-white/10 px-2 py-1 rounded">{reason.count.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
      {recommendations && recommendations.length > 0 && (
        <div className="space-y-3 mt-6">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} recommendation={rec} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropoffSection;

