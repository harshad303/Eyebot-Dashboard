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

