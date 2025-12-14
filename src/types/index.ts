export interface LocationProfile {
  name: string;
  dateRange: string;
  totalRevenue: number;
  revenueChange: number;
  networkComparison: number;
}

export interface Reason {
  count: number;
  percentage: number;
  description: string;
}

export interface Recommendation {
  title: string;
  impact: string;
  revenue: string;
  effort?: string;
  confidence?: string;
}

export interface DropoffData {
  lost: number;
  percentage: number;
  label: string;
  reasons: Reason[];
}

export interface FunnelStage {
  title: string;
  count: number;
  subtitle: string;
  dropoff?: DropoffData;
  recommendations?: Recommendation[];
}

export interface TimelineBucket {
  timeframe: string;
  count: number;
  revenue: number;
  avgOrder?: number;
  note?: string;
}

export interface Benchmark {
  label: string;
  value: number;
  comparison?: string;
}

export interface Priority {
  number: number;
  title: string;
  revenue: string;
  effort: string;
  roi: string;
}

export interface OptimizationData {
  current: number;
  networkAvg: number;
  top10Percent: number;
  opportunity: number;
  priorities: Priority[];
  totalImpact: {
    newRevenue: number;
    increase: number;
    newRevenuePerTest: number;
  };
}

