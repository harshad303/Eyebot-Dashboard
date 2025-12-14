import { Opportunity } from '../types';

interface OpportunitiesTableProps {
  opportunities: Opportunity[];
  totalRevenue: string;
}

const OpportunitiesTable = ({ opportunities, totalRevenue }: OpportunitiesTableProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top 3 Opportunities</h2>
        <p className="text-sm text-gray-600 mt-1">{totalRevenue}/mo in quick wins</p>
      </div>
      
      <div className="space-y-0">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.rank}
            className="flex items-center gap-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0">
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
    </div>
  );
};

export default OpportunitiesTable;

