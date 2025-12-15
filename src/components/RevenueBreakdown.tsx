import { DollarSign, AlertCircle } from 'lucide-react';
import { RevenueItem } from '../types';

interface RevenueBreakdownProps {
  items: RevenueItem[];
  total: number;
  lostOpportunity?: number;
  recoveryRate?: number;
}

const RevenueBreakdown = ({ items, total, lostOpportunity, recoveryRate }: RevenueBreakdownProps) => {
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
      <div className="mb-6 flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-eyebot-purple" />
        <h2 className="text-2xl font-bold text-gray-900">Revenue Attribution</h2>
      </div>
      
      <div className="space-y-0">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex-1 transition-all duration-200">
              <div className="text-base font-semibold text-gray-900">
                {item.label}
              </div>
              <div className="text-sm text-gray-600 mt-0.5">
                {item.count.toLocaleString()} {item.timing && `• ${item.timing}`}
              </div>
            </div>
            
            <div className="text-lg font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
              {formatCurrency(item.amount)}
            </div>
          </div>
        ))}
      </div>
      
      {lostOpportunity && (
        <div className="my-4 p-4 bg-orange-50 border-l-4 border-warning rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                115 customers bought Rx but no glasses yet
              </div>
              <div className="text-orange-700 font-bold mb-1">
                {formatCurrency(lostOpportunity)} potential revenue
              </div>
              {recoveryRate && (
                <div className="text-sm text-orange-600">
                  Recovery rate: {recoveryRate}% with email reminders
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
        <div className="text-lg font-bold text-gray-900">Total Revenue</div>
        <div className="text-2xl font-bold text-eyebot-purple">
          {formatCurrency(total)}
        </div>
      </div>
    </div>
  );
};

export default RevenueBreakdown;

