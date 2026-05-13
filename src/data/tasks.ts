import type { AgentTask } from '../types';

export const tasks: AgentTask[] = [
  'Create PR',
  'Refactor Code',
  'Upgrade Dependencies',
  'Run Tests',
  'Security Scan',
];

export const taskLogs: Record<AgentTask, string[]> = {
  'Create PR': [
    'Checking repository permissions...',
    'Creating agent branch...',
    'Applying code changes...',
    'Running validation checks...',
    'Creating pull request with summary...',
  ],
  'Refactor Code': [
    'Scanning complex files...',
    'Finding duplicate logic...',
    'Applying safe refactor changes...',
    'Running unit tests...',
    'Preparing refactor summary...',
  ],
  'Upgrade Dependencies': [
    'Reading dependency files...',
    'Checking outdated packages...',
    'Applying safe upgrades...',
    'Running build checks...',
    'Generating upgrade report...',
  ],
  'Run Tests': [
    'Starting test environment...',
    'Installing packages...',
    'Running unit tests...',
    'Running integration checks...',
    'Publishing test report...',
  ],
  'Security Scan': [
    'Scanning dependencies...',
    'Checking exposed secrets...',
    'Reviewing CI configuration...',
    'Prioritizing vulnerabilities...',
    'Publishing security recommendations...',
  ],
};
