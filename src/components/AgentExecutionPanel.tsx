import type { AgentStatus, AgentTask } from '../types';

type AgentExecutionPanelProps = {
  status: AgentStatus;
  selectedTask: AgentTask;
  logs: string[];
  isRunning: boolean;
  onRunAgent: () => void;
  onOpenDetails: () => void;
};

export function AgentExecutionPanel({
  status,
  selectedTask,
  logs,
  isRunning,
  onRunAgent,
  onOpenDetails,
}: AgentExecutionPanelProps) {
  return (
    <section className="panel">
      <div className="execution-header">
        <div>
          <h2>Agent Execution</h2>
          <p className="muted">Live progress and logs.</p>
        </div>
        <span className={`badge ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="current-task">
        <span>Selected task</span>
        <strong>{selectedTask}</strong>
      </div>

      <div className="logs">
        {logs.length === 0 ? (
          <p className="empty">No logs yet. Run an agent task.</p>
        ) : (
          logs.map((log, index) => (
            <p key={index}>
              <span>[{index + 1}]</span> {log}
            </p>
          ))
        )}
      </div>

      <div className="actions">
        <button
          className="outline-btn"
          disabled={isRunning}
          onClick={onRunAgent}
        >
          Retry
        </button>
        <button className="details-btn" onClick={onOpenDetails}>
          Details
        </button>
      </div>
    </section>
  );
}
