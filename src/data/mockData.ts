import { LocationProfile, RevenueItem, Connection, SummaryMetrics } from '../types';

export const locationProfile: LocationProfile = {
  name: 'Burlington Mall, Burlington MA',
  dateRange: 'Nov 10 - Dec 10, 2024',
  totalRevenue: 197214,
  revenueChange: 18,
};

export const revenueBreakdown: RevenueItem[] = [
  { label: 'Prescription Sales (Eyebot)', amount: 46500, count: 2325, timing: '$20 per Rx' },
  { label: 'Immediate Glasses (0-5 min)', amount: 151326, count: 1698, timing: 'Avg $89' },
  { label: 'Glasses Within 7 Days', amount: 34968, count: 372, timing: 'Avg $94' },
  { label: 'Glasses Within 30 Days', amount: 10920, count: 140, timing: 'Avg $78' }
];

export const connectionDetails: Connection[] = [
  {
    dropoffPercent: 11.3,
    isPositive: false,
    dropoffCount: 528,
    reasons: [
      { reason: 'Waited too long (>2 min)', count: 312, percent: 59 },
      { reason: 'Confused by instructions', count: 156, percent: 30 },
      { reason: 'Hardware error', count: 60, percent: 11 }
    ],
    fix: {
      title: 'Staff intervention at 90 sec',
      impact: 'Recover 187 tests',
      revenue: 7878
    }
  },
  {
    dropoffPercent: 44,
    isPositive: false,
    dropoffCount: 1827,
    reasons: [
      { reason: 'Just trying it out', count: 729, percent: 40 },
      { reason: 'Too expensive ($20)', count: 620, percent: 34 },
      { reason: 'Need insurance', count: 312, percent: 17 }
    ],
    fix: {
      title: 'Launch $15 bundle offer',
      impact: '18% conversion lift',
      revenue: 6577
    }
  },
  {
    dropoffPercent: 95,
    isPositive: true,
    dropoffCount: 115,
    reasons: [
      { reason: 'Still deciding on frames', count: 52, percent: 45 },
      { reason: 'Waiting for payday', count: 38, percent: 33 },
      { reason: 'Comparing prices', count: 25, percent: 22 }
    ],
    fix: {
      title: 'Email reminder on day 14',
      impact: '31% recovery rate',
      revenue: 3349
    }
  }
];

export const summaryMetrics: SummaryMetrics = {
  implementedRevenue: 239695,
  growthPercent: 21.5,
  currentRevPerTest: 42.14,
  targetRevPerTest: 51.21,
  lostOpportunity: 10235,
  recoveryRate: 31
};

