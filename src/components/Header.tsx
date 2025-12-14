import { LocationProfile } from '../types';
import { TrendingUp } from 'lucide-react';

interface HeaderProps {
  location: LocationProfile;
}

const Header = ({ location }: HeaderProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 h-16 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Revenue Waterfall</h1>
          <p className="text-sm text-gray-600 font-medium">
            {location.name} • {location.dateRange}
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-4xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {formatCurrency(location.totalRevenue)}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200/50">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">↑ {location.revenueChange}% vs last period</span>
            </div>
            <div className="text-xs text-gray-500 font-medium px-3">
              {location.networkComparison}% above network average
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

