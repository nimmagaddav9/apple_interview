import type { AgentTask, Repo } from '../types';
import { tasks } from '../data/tasks';

type RepositoryDetailsProps = {
  selectedRepo: Repo;
  selectedTask: AgentTask;
  isRunning: boolean;
  onTaskSelect: (task: AgentTask) => void;
  onRunAgent: () => void;
};

export function RepositoryDetails({
  selectedRepo,
  selectedTask,
  isRunning,
  onTaskSelect,
  onRunAgent,
}: RepositoryDetailsProps) {
  return (
    <section className="panel main-panel">
      <div className="repo-title-row">
        <div>
          <h2>{selectedRepo.name}</h2>
          <p className="muted">{selectedRepo.description}</p>
          <p className="meta">
            Owner: {selectedRepo.owner} • Last commit: {selectedRepo.lastCommit}
          </p>
        </div>
        <span className={`badge ${selectedRepo.status.toLowerCase()}`}>
          {selectedRepo.status}
        </span>
      </div>

      <div className="insights">
        <div className="insight">
          <span>Coverage</span>
          <strong>{selectedRepo.coverage}%</strong>
        </div>
        <div className="insight">
          <span>Open PRs</span>
          <strong>{selectedRepo.openPRs}</strong>
        </div>
        <div className="insight">
          <span>Issues</span>
          <strong>{selectedRepo.issues}</strong>
        </div>
        <div className="insight">
          <span>Dependencies</span>
          <strong>{selectedRepo.dependencies}</strong>
        </div>
      </div>

      <div className="task-box">
        <h3>Run Agent Task</h3>

        <div className="task-grid">
          {tasks.map((task) => (
            <button
              key={task}
              className={`task-btn ${selectedTask === task ? 'active' : ''}`}
              onClick={() => onTaskSelect(task)}
            >
              {task}
            </button>
          ))}
        </div>

        <button className="run-btn" disabled={isRunning} onClick={onRunAgent}>
          {isRunning ? 'Agent Running...' : `Run ${selectedTask}`}
        </button>
      </div>
    </section>
  );
}
