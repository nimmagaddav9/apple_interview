import React, { useMemo, useState } from 'react';
import './styles.css';

import type { AgentStatus, AgentTask, Repo, RepoStatus } from './types';
import { repos } from './data/repo';
import { taskLogs } from './data/tasks';

import { Header } from './components/Header';
import { RepositoryPanel } from './components/RepositoryPanel';
import { RepositoryDetails } from './components/RepositoryDetails';
import { AgentExecutionPanel } from './components/AgentExecutionPanel';
import { ExecutionDrawer } from './components/ExecutionDrawer';

export default function App() {
  const [selectedRepo, setSelectedRepo] = useState<Repo>(repos[0]);
  const [selectedTask, setSelectedTask] = useState<AgentTask>(
    'Upgrade Dependencies'
  );
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<RepoStatus | 'All'>('All');
  const [status, setStatus] = useState<AgentStatus>('Idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const text = `${repo.name} ${repo.owner} ${repo.language}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || repo.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  function runAgent() {
    setStatus('Pending');
    setLogs([`Queued ${selectedTask} for ${selectedRepo.name}`]);

    setTimeout(() => {
      setStatus('Running');
      setLogs((oldLogs) => [...oldLogs, 'Agent started execution...']);
    }, 700);

    taskLogs[selectedTask].forEach((log, index) => {
      setTimeout(() => {
        setLogs((oldLogs) => [...oldLogs, log]);

        const isLastLog = index === taskLogs[selectedTask].length - 1;

        if (isLastLog) {
          setTimeout(() => {
            const shouldFail =
              selectedRepo.status === 'Critical' &&
              selectedTask !== 'Security Scan';

            setStatus(shouldFail ? 'Failure' : 'Success');

            setLogs((oldLogs) => [
              ...oldLogs,
              shouldFail
                ? 'Agent failed because this repo has critical health issues. Try Security Scan first.'
                : 'Agent completed successfully. Results are ready.',
            ]);
          }, 600);
        }
      }, 1400 + index * 800);
    });
  }

  function selectRepo(repo: Repo) {
    setSelectedRepo(repo);
    setStatus('Idle');
    setLogs([]);
  }

  const isRunning = status === 'Pending' || status === 'Running';

  return (
    <div className="app">
      <Header />

      <main className="grid">
        <RepositoryPanel
          repos={filteredRepos}
          selectedRepo={selectedRepo}
          search={search}
          filter={filter}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
          onRepoSelect={selectRepo}
        />

        <RepositoryDetails
          selectedRepo={selectedRepo}
          selectedTask={selectedTask}
          isRunning={isRunning}
          onTaskSelect={setSelectedTask}
          onRunAgent={runAgent}
        />

        <AgentExecutionPanel
          status={status}
          selectedTask={selectedTask}
          logs={logs}
          isRunning={isRunning}
          onRunAgent={runAgent}
          onOpenDetails={() => setDrawerOpen(true)}
        />
      </main>

      {drawerOpen && (
        <ExecutionDrawer
          selectedRepo={selectedRepo}
          selectedTask={selectedTask}
          status={status}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
}
