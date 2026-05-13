export type RepoStatus = 'Healthy' | 'Warning' | 'Critical';

export type AgentStatus =
  | 'Idle'
  | 'Pending'
  | 'Running'
  | 'Success'
  | 'Failure';

export type AgentTask =
  | 'Create PR'
  | 'Refactor Code'
  | 'Upgrade Dependencies'
  | 'Run Tests'
  | 'Security Scan';

export type Repo = {
  id: number;
  name: string;
  owner: string;
  language: string;
  status: RepoStatus;
  coverage: number;
  openPRs: number;
  issues: number;
  dependencies: number;
  lastCommit: string;
  description: string;
};
