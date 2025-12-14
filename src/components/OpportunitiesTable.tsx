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
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top 3 Opportunities</h2>
        <p className="text-sm text-gray-600 mt-1">{totalRevenue}/mo in quick wins</p>
      </div>
      
      <div className="space-y-0">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.rank}
            className="flex items-center gap-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-200">
              {opportunity.rank}
            </div>
            
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">
                {opportunity.title}
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                {opportunity.description}
              </div>
            </div>
            
            <div className="text-lg font-bold text-green-600">
              {opportunity.revenue}
            </div>
            
            <div className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
              {opportunity.effort}
            </div>
          </div>
        ))}
      </div>
      
      {summaryMetrics && (
        <div className="mt-6 pt-4 border-t-2 border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-700">If all implemented:</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +{summaryMetrics.growthPercent}% growth
              </span>
            </div>
          </div>
          <div className="font-bold text-blue-700 text-lg mb-3">
            Revenue increases to {formatCurrency(summaryMetrics.implementedRevenue)}/mo
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-gray-600">
              Current: ${summaryMetrics.currentRevPerTest.toFixed(2)}/test
            </div>
            <div className="text-blue-600 font-semibold">
              After fixes: ${summaryMetrics.targetRevPerTest.toFixed(2)}/test
            </div>
            <div className="text-gray-500">
              Matches top 10% benchmark
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesTable;

