interface RecommendationCardProps {
  recommendation: {
    title: string;
    impact: string;
    revenue: string;
    effort?: string;
    confidence?: string;
  };
}

import { Lightbulb, TrendingUp, DollarSign } from 'lucide-react';

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-bold text-base flex-1 leading-tight">{recommendation.title}</span>
      </div>
      <div className="space-y-2.5 text-white">
        <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
          <TrendingUp className="w-4 h-4 text-orange-100" />
          <span className="text-sm font-medium">{recommendation.impact}</span>
        </div>
        <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
          <DollarSign className="w-4 h-4 text-orange-100" />
          <span className="text-sm font-bold">{recommendation.revenue}</span>
        </div>
        {recommendation.effort && (
          <div className="text-xs text-orange-50 bg-white/10 rounded px-2.5 py-1.5 inline-block font-medium">
            Effort: {recommendation.effort}
          </div>
        )}
        {recommendation.confidence && (
          <div className="text-xs text-orange-50 bg-white/10 rounded px-2.5 py-1.5 inline-block font-medium">
            {recommendation.confidence}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationCard;

