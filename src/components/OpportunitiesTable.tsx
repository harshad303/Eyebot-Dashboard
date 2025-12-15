import { Opportunity, SummaryMetrics } from '../types';
import { TrendingUp } from 'lucide-react';

interface OpportunitiesTableProps {
  opportunities: Opportunity[];
  totalRevenue: string;
  summaryMetrics?: SummaryMetrics;
}

const OpportunitiesTable = ({ opportunities, totalRevenue, summaryMetrics }: OpportunitiesTableProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  return (
    <div className="bg-eyebot-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Top 3 Opportunities</h2>
        <p className="text-sm text-gray-600 mt-1">{totalRevenue}/mo in quick wins</p>
      </div>
      
      <div className="space-y-0">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.rank}
            className="flex items-center gap-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-eyebot-purple/10 text-eyebot-purple font-bold flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-200 border-2 border-eyebot-purple/30">
              {opportunity.rank}
            </div>
            
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">
                {opportunity.title}
              </div>
              <div className="text-sm text-gray-600 mt-0.5">
                {opportunity.description}
              </div>
            </div>
            
            <div className="text-lg font-bold text-success">
              {opportunity.revenue}
            </div>
            
            <div className="text-xs text-gray-600 px-3 py-1 bg-gray-100 rounded-full font-semibold uppercase tracking-wide">
              {opportunity.effort}
            </div>
          </div>
        ))}
      </div>
      
      {summaryMetrics && (
        <div className="mt-6 pt-4 border-t-2 border-gray-200 bg-eyebot-dark rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-300">If all implemented:</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-success flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +{summaryMetrics.growthPercent}% growth
              </span>
            </div>
          </div>
          <div className="font-bold text-white text-lg mb-3">
            Revenue increases to {formatCurrency(summaryMetrics.implementedRevenue)}/mo
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-gray-300">
              Current: ${summaryMetrics.currentRevPerTest.toFixed(2)}/test
            </div>
            <div className="text-eyebot-purple-light font-semibold text-sm">
              After fixes: ${summaryMetrics.targetRevPerTest.toFixed(2)}/test
            </div>
            <div className="text-gray-300">
              Matches top 10% benchmark
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesTable;

