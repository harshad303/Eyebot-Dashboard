import {
  LocationProfile,
  FunnelStage,
  TimelineBucket,
  OptimizationData,
} from '../types';

export const locationProfile: LocationProfile = {
  name: 'Burlington Mall, Burlington MA',
  dateRange: 'Nov 10 - Dec 10, 2024',
  totalRevenue: 197214,
  revenueChange: 18,
  networkComparison: 12,
};

export const funnelStages: FunnelStage[] = [
  {
    title: 'TESTS STARTED',
    count: 4680,
    subtitle: '100% of potential revenue',
    dropoff: {
      lost: 528,
      percentage: 11.3,
      label: 'ABANDONMENT',
      reasons: [
        {
          count: 312,
          percentage: 59,
          description: 'Waited too long (>2 min to start)',
        },
        {
          count: 156,
          percentage: 30,
          description: 'Confused by instructions',
        },
        {
          count: 60,
          percentage: 11,
          description: 'Hardware error interrupted',
        },
      ],
    },
    recommendations: [
      {
        title: 'Staff intervention for 90+ second waits',
        impact: 'Recover 187 tests',
        revenue: '+$7,878/month',
        effort: '1 day staff training',
        confidence: 'HIGH (tested at 8 locations, 58% avg recovery)',
      },
    ],
  },
  {
    title: 'TESTS COMPLETED ✓',
    count: 4152,
    subtitle: '89% completion rate (Target: 92%)',
    dropoff: {
      lost: 1827,
      percentage: 44,
      label: 'NO RX PURCHASE',
      reasons: [
        {
          count: 729,
          percentage: 40,
          description: '"Just trying it out / curious"',
        },
        {
          count: 620,
          percentage: 34,
          description: '"Too expensive" ($20 objection)',
        },
        {
          count: 312,
          percentage: 17,
          description: 'Need insurance coverage',
        },
        {
          count: 166,
          percentage: 9,
          description: 'No reason given',
        },
      ],
    },
    recommendations: [
      {
        title: 'Try + Buy bundle: $15 if buying glasses',
        impact: '18% conversion lift',
        revenue: '+$6,577/month',
        effort: '2 days implementation',
      },
      {
        title: 'Email capture for curious users',
        impact: '23% convert within 14 days',
        revenue: '+$3,349/month',
        effort: '1 week setup',
      },
    ],
  },
  {
    title: 'PRESCRIPTIONS PURCHASED 💳',
    count: 2325,
    subtitle: '56% conversion rate (Network avg: 52%)',
  },
];

export const timelineBuckets: TimelineBucket[] = [
  {
    timeframe: 'Immediate (0-5 min)',
    count: 1698,
    revenue: 151326,
    avgOrder: 89,
  },
  {
    timeframe: 'Within 7 days',
    count: 372,
    revenue: 34968,
    avgOrder: 94,
    note: '83% clicked email reminder on day 3 (emails work!)',
  },
  {
    timeframe: 'Within 30 days',
    count: 140,
    revenue: 10920,
    avgOrder: 78,
  },
  {
    timeframe: 'No purchase yet',
    count: 115,
    revenue: 0,
    avgOrder: 89,
    note: 'Lost opportunity: $10,235 (at avg $89)',
  },
];

export const optimizationData: OptimizationData = {
  current: 42.14,
  networkAvg: 37.80,
  top10Percent: 51.20,
  opportunity: 42481,
  priorities: [
    {
      number: 1,
      title: 'Fix abandonment - staff intervention',
      revenue: '+$7,878/month',
      effort: '1 day',
      roi: '1,476%',
    },
    {
      number: 2,
      title: 'Launch $15 bundle promotion',
      revenue: '+$6,577/month',
      effort: '2 days',
      roi: '823%',
    },
    {
      number: 3,
      title: 'Email capture + 14-day remarket',
      revenue: '+$3,349/month',
      effort: '1 week',
      roi: '267%',
    },
  ],
  totalImpact: {
    newRevenue: 239695,
    increase: 21.5,
    newRevenuePerTest: 51.21,
  },
};

export const prescriptionRevenue = 46500; // 2,325 × $20

