import { ReactNode } from 'react';

export interface LocationProfile {
  name: string;
  dateRange: string;
  totalRevenue: number;
  revenueChange: number;
}

export interface Stage {
  count: number;
  label: string;
  icon: ReactNode;
}

export interface Connection {
  dropoffPercent: number;
  isPositive?: boolean;
  dropoffCount?: number;
  reasons?: Array<{
    reason: string;
    count: number;
    percent: number;
  }>;
  fix?: {
    title: string;
    impact: string;
    revenue: number;
  };
}

export interface Opportunity {
  rank: number;
  title: string;
  description: string;
  revenue: string;
  effort: string;
}

export interface PerformanceData {
  label: string;
  value: number;
  color: string;
  isYou?: boolean;
}

export interface RevenueItem {
  label: string;
  amount: number;
  count: number;
  timing?: string;
}

export interface SummaryMetrics {
  implementedRevenue: number;
  growthPercent: number;
  currentRevPerTest: number;
  targetRevPerTest: number;
  lostOpportunity: number;
  recoveryRate: number;
}

