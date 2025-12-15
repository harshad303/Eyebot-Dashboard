import { LocationProfile } from '../types';
import { TrendingUp } from 'lucide-react';
// Vite/TS: declare SVG import in a .d.ts file if needed. Runtime path is correct.
const EyebotLogoPath = new URL('../eyebot-logo.svg', import.meta.url).href;

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
    <header className="fixed top-0 left-0 right-0 bg-eyebot-white border-b border-gray-200 z-50 h-12 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={EyebotLogoPath} alt="Eyebot" className="h-6 w-auto" />
            <h1 className="text-lg font-bold text-gray-900">Revenue Waterfall</h1>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-600">
            {location.name} • {location.dateRange}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatCurrency(location.totalRevenue)}
          </span>
          <span className="bg-green-50 text-green-700 text-sm px-2 py-1 rounded-full font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            ↑ {location.revenueChange}%
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

