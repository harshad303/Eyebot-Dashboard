import Header from './components/Header';
import FunnelStage from './components/FunnelStage';
import DropoffSection from './components/DropoffSection';
import ArrowConnector from './components/ArrowConnector';
import TimelineSection from './components/TimelineSection';
import OptimizationSummary from './components/OptimizationSummary';
import {
  locationProfile,
  funnelStages,
  timelineBuckets,
  optimizationData,
  prescriptionRevenue,
} from './data/mockData';

function App() {
  return (
    <div className="min-h-screen">
      <Header location={locationProfile} />
      
      <main className="max-w-7xl mx-auto px-8 pt-28 pb-16">
        {/* Section Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            The Complete Customer Journey
          </h1>
          <p className="text-base text-gray-600 font-medium">
            Follow the revenue flow from test to purchase
          </p>
        </div>

        {/* Stage 1: Tests Started */}
        <FunnelStage
          title={funnelStages[0].title}
          count={funnelStages[0].count}
          subtitle={funnelStages[0].subtitle}
        >
          {funnelStages[0].dropoff && (
            <DropoffSection
              dropoff={funnelStages[0].dropoff}
              recommendations={funnelStages[0].recommendations}
            />
          )}
        </FunnelStage>

        <ArrowConnector />

        {/* Stage 2: Tests Completed */}
        <FunnelStage
          title={funnelStages[1].title}
          count={funnelStages[1].count}
          subtitle={funnelStages[1].subtitle}
        >
          {funnelStages[1].dropoff && (
            <DropoffSection
              dropoff={funnelStages[1].dropoff}
              recommendations={funnelStages[1].recommendations}
            />
          )}
        </FunnelStage>

        <ArrowConnector />

        {/* Stage 3: Prescriptions Purchased */}
        <FunnelStage
          title={funnelStages[2].title}
          count={funnelStages[2].count}
          subtitle={funnelStages[2].subtitle}
        >
          <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <div className="text-xl font-bold text-gray-900">
              Revenue: <span className="text-blue-600">${prescriptionRevenue.toLocaleString()}</span>
              <span className="text-gray-600 text-base font-normal ml-2">($20 × {funnelStages[2].count.toLocaleString()})</span>
            </div>
          </div>
          <TimelineSection buckets={timelineBuckets} />
        </FunnelStage>

        {/* Optimization Summary */}
        <OptimizationSummary data={optimizationData} />
      </main>
    </div>
  );
}

export default App;

