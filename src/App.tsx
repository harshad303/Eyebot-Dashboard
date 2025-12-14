import Header from './components/Header';
import HorizontalFunnel from './components/HorizontalFunnel';
import OpportunitiesTable from './components/OpportunitiesTable';
import PerformanceChart from './components/PerformanceChart';
import { locationProfile } from './data/mockData';
import { BarChart3, CheckCircle2, CreditCard, Glasses } from 'lucide-react';

function App() {
  // Funnel stages data
  const stages = [
    { 
      count: 4680, 
      label: "Started", 
      icon: <BarChart3 className="w-8 h-8 text-blue-500" /> 
    },
    { 
      count: 4152, 
      label: "Completed", 
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" /> 
    },
    { 
      count: 2325, 
      label: "Bought Rx", 
      icon: <CreditCard className="w-8 h-8 text-purple-500" /> 
    },
    { 
      count: 2210, 
      label: "Bought Glasses", 
      icon: <Glasses className="w-8 h-8 text-orange-500" /> 
    }
  ];

  // Connection data (drop-off percentages)
  const connections = [
    { dropoffPercent: 11.3, isPositive: false },
    { dropoffPercent: 44, isPositive: false },
    { dropoffPercent: 95, isPositive: true }
  ];

  // Opportunities data
  const opportunities = [
    {
      rank: 1,
      title: "Fix wait time abandonments",
      description: "312 people waiting >2 min",
      revenue: "+$7,878",
      effort: "1 day"
    },
    {
      rank: 2,
      title: "Launch $15 bundle offer",
      description: "620 cite price objection",
      revenue: "+$6,577",
      effort: "2 days"
    },
    {
      rank: 3,
      title: "Email post-purchase reminders",
      description: "115 haven't bought glasses yet",
      revenue: "+$3,349",
      effort: "1 week"
    }
  ];

  // Performance data
  const performanceData = [
    { label: "You", value: 42.14, color: "bg-blue-500", isYou: true },
    { label: "Network", value: 37.80, color: "bg-gray-400" },
    { label: "Top 10%", value: 51.20, color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header location={locationProfile} />
      
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Section 1: Horizontal Funnel */}
        <HorizontalFunnel stages={stages} connections={connections} />
        
        {/* Section 2: Opportunities */}
        <div className="mt-6">
          <OpportunitiesTable 
            opportunities={opportunities} 
            totalRevenue="$17,804"
          />
        </div>
        
        {/* Section 3: Performance */}
        <div className="mt-6">
          <PerformanceChart 
            data={performanceData}
            maxValue={51.20}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

