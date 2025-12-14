import { Target, TrendingUp, Zap } from 'lucide-react';
import { OptimizationData } from '../types';

interface OptimizationSummaryProps {
  data: OptimizationData;
}

const OptimizationSummary = ({ data }: OptimizationSummaryProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-10 mt-10 shadow-2xl border border-blue-400/20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Optimization Summary</h2>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/20 transition-colors">
          <div className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-2">Current</div>
          <div className="text-white text-3xl font-bold tracking-tight">${data.current.toFixed(2)}<span className="text-lg text-white/80">/test</span></div>
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/20 transition-colors">
          <div className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-2">Network Avg</div>
          <div className="text-white text-3xl font-bold tracking-tight">${data.networkAvg.toFixed(2)}<span className="text-lg text-white/80">/test</span></div>
          <div className="text-white/80 text-xs mt-2 font-medium bg-white/10 rounded px-2 py-1 inline-block">
            {((data.current - data.networkAvg) / data.networkAvg * 100).toFixed(1)}% above network
          </div>
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/20 transition-colors">
          <div className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-2">Top 10%</div>
          <div className="text-white text-3xl font-bold tracking-tight">${data.top10Percent.toFixed(2)}<span className="text-lg text-white/80">/test</span></div>
          <div className="text-white/80 text-xs mt-2 font-medium bg-white/10 rounded px-2 py-1 inline-block">
            Opportunity: ${(data.top10Percent - data.current).toFixed(2)}/test gap
          </div>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-yellow-200" />
          <div className="text-white/90 text-sm font-semibold uppercase tracking-wide">Total Addressable Opportunity</div>
        </div>
        <div className="text-white text-5xl font-bold tracking-tight">
          ${data.opportunity.toLocaleString()}<span className="text-2xl text-white/90">/month</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white font-bold mb-6 text-xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Top 3 Priorities (by ROI)
        </h3>
        <div className="space-y-4">
          {data.priorities.map((priority) => (
            <div
              key={priority.number}
              className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 flex items-start gap-5"
            >
              <div className="bg-white/25 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
                {priority.number}
              </div>
              <div className="flex-1">
                <div className="text-white font-bold mb-2 text-base">{priority.title}</div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                    <span className="text-white/90">Revenue:</span>
                    <span className="text-white font-bold">{priority.revenue}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                    <span className="text-white/90">Effort:</span>
                    <span className="text-white font-semibold">{priority.effort}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                    <span className="text-white/90">ROI:</span>
                    <span className="text-white font-bold">{priority.roi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
        <div className="text-white/90 text-sm font-semibold mb-2 uppercase tracking-wide">If all implemented:</div>
        <div className="text-white text-3xl font-bold tracking-tight mb-2">
          ${data.totalImpact.newRevenue.toLocaleString()}<span className="text-xl text-white/90">/mo</span>
          <span className="text-green-200 ml-2">(+{data.totalImpact.increase}%)</span>
        </div>
        <div className="text-white/80 text-sm font-medium mt-2">
          New revenue/test: ${data.totalImpact.newRevenuePerTest.toFixed(2)} (matching top 10%!)
        </div>
      </div>
    </div>
  );
};

export default OptimizationSummary;

