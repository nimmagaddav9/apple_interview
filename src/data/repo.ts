import type { Repo } from '../types';

export const repos: Repo[] = [
  {
    id: 1,
    name: 'payments-api',
    owner: 'platform-team',
    language: 'TypeScript',
    status: 'Healthy',
    coverage: 86,
    openPRs: 4,
    issues: 9,
    dependencies: 38,
    lastCommit: '2 hours ago',
    description:
      'Payment orchestration API for checkout, refunds, and ledger events.',
  },
  {
    id: 2,
    name: 'pricing-engine',
    owner: 'commerce-dev',
    language: 'Java',
    status: 'Warning',
    coverage: 74,
    openPRs: 7,
    issues: 18,
    dependencies: 51,
    lastCommit: '1 day ago',
    description:
      'Pricing service with rules, batch jobs, and integration-heavy workflows.',
  },
  {
    id: 3,
    name: 'developer-portal',
    owner: 'internal-tools',
    language: 'React',
    status: 'Healthy',
    coverage: 92,
    openPRs: 2,
    issues: 6,
    dependencies: 29,
    lastCommit: '35 minutes ago',
    description:
      'Internal portal for repo ownership, automation, and developer workflows.',
  },
  {
    id: 4,
    name: 'legacy-auth-service',
    owner: 'identity-team',
    language: 'Node.js',
    status: 'Critical',
    coverage: 58,
    openPRs: 12,
    issues: 31,
    dependencies: 77,
    lastCommit: '6 days ago',
    description:
      'Legacy authentication service with aging packages and low test coverage.',
  },
];
