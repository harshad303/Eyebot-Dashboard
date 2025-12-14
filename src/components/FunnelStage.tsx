import { ReactNode } from 'react';

interface FunnelStageProps {
  title: string;
  count: number;
  subtitle: string;
  children?: ReactNode;
}

const FunnelStage = ({ title, count, subtitle, children }: FunnelStageProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          {count.toLocaleString()} <span className="text-gray-600">{title}</span>
        </h2>
        <p className="text-sm text-gray-600 font-medium">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default FunnelStage;

